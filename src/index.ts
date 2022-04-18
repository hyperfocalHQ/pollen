#!/usr/bin/env node
import { program } from 'commander';
import { cosmiconfig } from 'cosmiconfig';
import fs from 'fs';
import mapObject, { mapObjectSkip } from 'map-obj';
import path from 'path';
import { ConfigObject, PollenModule } from '../@types/pollen';
import { formatModule } from './lib/formatModule';
import { toCSS } from './lib/toCSS';
import { toJSON } from './lib/toJSON';
import modules from './modules';

const DEFAULTS = {
  ...Object.keys(modules).reduce((acc, cur) => ({ ...acc, [cur]: true }), {})
};

program
  .option('-o, --output <path>', 'output file path')
  .option('-c, --config <path>', 'config file path');
program.parse(process.argv);

function parseOutputConfig(output: ConfigObject['output']) {
  if (!output) {
    return { css: undefined, json: undefined };
  }
  if (typeof output === 'string') {
    return { css: output, json: undefined };
  }
  return output;
}

(async () => {
  const cliOpts = program.opts(),
    cosmic = cosmiconfig('pollen'),
    configResults = cliOpts?.config
      ? await cosmic.load(cliOpts.config)
      : await cosmic.search(),
    config: ConfigObject =
      typeof configResults?.config === 'function'
        ? configResults.config(modules)
        : configResults?.config,
    { css = './pollen.css', json } = parseOutputConfig(
      cliOpts?.output || config?.output
    ),
    cssMap = mapObject(
      { ...DEFAULTS, ...config?.modules },
      (key: string, val: string) => {
        if (!val) {
          return mapObjectSkip;
        }
        return typeof val === 'boolean'
          ? [key, modules[key as keyof typeof modules]]
          : ([key, val] as any);
      }
    ) as PollenModule;

  fs.writeFileSync(
    path.resolve(process.cwd(), css),
    `/**
* THIS IS AN AUTO-GENERATED FILE
* Edit Pollen config to update
*/
${config?.selector || ':root'} ${toCSS(formatModule(cssMap))}`
  );

  json && fs.writeFileSync(path.resolve(process.cwd(), json), toJSON({ ...modules, ...config.modules }));
})();
