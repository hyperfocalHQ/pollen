#!/usr/bin/env node
import { program } from 'commander';
import { cosmiconfig } from 'cosmiconfig';
import fs from 'fs';
import mapObject, { mapObjectSkip } from 'map-obj';
import path from 'path';
import { ConfigObject, PollenModule } from '../@types/pollen';
import { format, formatModule, queriesToCSS, toCSS } from './lib';
import modules from './modules';

// Init CLI
program
  .option('-o, --output <path>', 'output file path')
  .option('-c, --config <path>', 'config file path');
program.parse(process.argv);

// Default Config
const DEFAULTS = {
  output: './pollen.css',
  modules: Object.keys(modules).reduce(
    (acc, cur) => ({ ...acc, [cur]: true }),
    {}
  )
};

// File writer
function writeFiles(config: ConfigObject, data: PollenModule) {
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

// Run it
async function run() {
  const cliOpts = program.opts(),
    cosmic = cosmiconfig('pollen'),
    configResults = cliOpts?.config
      ? await cosmic.load(cliOpts.config)
      : await cosmic.search(),
    userConfig: ConfigObject =
      typeof configResults?.config === 'function'
        ? configResults.config(modules)
        : configResults?.config,
    config = { ...DEFAULTS, ...userConfig, ...cliOpts },
    css = mapObject(
      { ...DEFAULTS.modules, ...config?.modules },
      (key: string, val: string) => {
        if (!val) {
          return mapObjectSkip;
        }
        return typeof val === 'boolean'
          ? [key, modules[key as keyof typeof modules]]
          : ([key, val] as any);
      }
    );

  writeFiles(config, css);
}

run();
