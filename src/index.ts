#!/usr/bin/env node
import { program } from 'commander';
import { cosmiconfig } from 'cosmiconfig';
import fs from 'fs';
import mapObject, { mapObjectSkip } from 'map-obj';
import path from 'path';
import { ConfigObject, PollenModule } from './types';
import { formatModule } from './lib/formatModule';
import { toCSS } from './lib/toCSS';
import modules from './modules';

const DEFAULTS = {
  ...Object.keys(modules).reduce((acc, cur) => ({ ...acc, [cur]: true }), {}),
  grid: false,
  color: false,
  typeset: false
};

program
  .option('-o, --output <path>', 'output file path')
  .option('-c, --config <path>', 'config file path');
program.parse(process.argv);

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
    outputPath = cliOpts?.output || config?.output || './pollen.css',
    cssMap = mapObject({ ...DEFAULTS, ...config?.modules }, (key, val) => {
      if (!val) {
        return mapObjectSkip;
      }
      return typeof val === 'boolean'
        ? [key, modules[key as keyof typeof modules]]
        : ([key, val] as any);
    }) as PollenModule;

  fs.writeFileSync(
    path.resolve(process.cwd(), outputPath),
    `/**
* THIS IS AN AUTO-GENERATED FILE
* Edit Pollen config to update
*/
:root ${toCSS(formatModule(cssMap))}`
  );
})();
