import { program } from 'commander';
import fs from 'fs';
import { stringify } from 'javascript-stringify';
import { lilconfig } from 'lilconfig';
import mapObject from 'map-obj';
import path from 'path';
import prettierCSS from 'prettier/parser-postcss';
import prettier from 'prettier/standalone';
import type {
  ConfigObject,
  CustomModule,
  PollenModule,
  Query
} from '../../@types/pollen';
import modules from '../modules';
import url from 'url';
import merge from 'deepmerge';

/**
 * Configured Prettier instance
 */
export function format(css: string) {
  return prettier.format(css, {
    parser: 'css',
    plugins: [prettierCSS]
  });
}

/**
 * Formats object of properties to JSON output of CSS variables
 */
export function formatModule(module: PollenModule & CustomModule) {
  return Object.keys(module)
    .map((family) => {
      return mapObject(
        module[family as keyof typeof module],
        (key: string, value: string) => [`--${family}-${key}`, value]
      );
    })
    .reduce((acc, cur) => ({ ...acc, ...cur }), {});
}

/**
 * Formats flat object to CSS string
 */
export function toCSS(
  selector: string,
  object: { [key: string]: string | number }
) {
  return format(
    `${selector} ${stringify(
      object,
      (value, indent, stringify) =>
        typeof value === 'string' ? value : stringify(value),
      2
    )?.replace(/,\n/g, ';\n')}`
  );
}

/**
 * Formats query objects to CSS strings
 */
export function queriesToCSS(
  selector: string,
  data: {
    [type: string]: Query;
  }
) {
  return format(
    `${Object.keys(data)
      .map((type) => {
        return `${Object.keys(data[type])
          .map((query) => {
            return `@${type} ${query} { ${toCSS(
              selector,
              formatModule(data[type][query] as any)
            )}}`;
          })
          .join('\n')}`;
      })
      .join('\n')}`
  );
}

/**
 * Gets user config
 */
export async function getConfig() {
  const importDefault = async (filepath: string) => {
      const module = await import(url.pathToFileURL(filepath).href);
      return module.default;
    },
    interopRequireDefault = (obj: any) =>
      obj && obj.__esModule ? obj : { default: obj };

  // Init CLI
  program
    .option('-o, --output <path>', 'output file path')
    .option('-c, --config <path>', 'config file path');
  program.parse(process.argv);

  // Default config
  const defaultConfig = {
    output: './pollen.css',
    modules: Object.keys(modules).reduce(
      (acc, cur) => ({ ...acc, [cur]: true }),
      {}
    )
  };

  // User config
  const cli = program.opts(),
    configure = lilconfig('pollen', {
      loaders: {
        '.js': importDefault,
        '.mjs': importDefault
      }
    }),
    configFile = cli.config
      ? await configure.load(cli.config)
      : await configure.search();

  let config = interopRequireDefault(configFile?.config).default || {};

  if (typeof config === 'function') {
    config = config(modules);
  }

  return merge(defaultConfig, config, cli);
}

/**
 * Writes files to CSS and JSON
 */
export function writeFiles(config: ConfigObject, data: PollenModule) {
  const output =
      typeof config.output === 'string'
        ? { css: config.output, json: undefined }
        : config.output,
    selector = config?.selector || ':root';

  const writeDirIfNeeded = (filePath: string) => {
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  };

  if (!output?.css) {
    throw new Error('No output given');
  }

  writeDirIfNeeded(output.css);
  output.json && writeDirIfNeeded(output.json);

  fs.writeFileSync(
    path.resolve(process.cwd(), output.css!),
    format(
      `/**
  * THIS IS AN AUTO-GENERATED FILE
  * Edit Pollen config to update
  */
      ${toCSS(selector, formatModule(data))}
      ${queriesToCSS(selector, {
        ...(config.media ? { media: config.media } : {}),
        ...(config.supports ? { supports: config.supports } : {})
      })}
      `
    )
  );

  output.json &&
    fs.writeFileSync(
      path.resolve(process.cwd(), output.json),
      JSON.stringify(data, null, 2)
    );
}
