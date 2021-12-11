#!/usr/bin/env node
import { program } from 'commander';
import { cosmiconfig } from 'cosmiconfig';
import fs from 'fs';
import mapObject, { mapObjectSkip } from 'map-obj';
import path from 'path';
import { formatModule } from './lib/formatModule';
import { toCSS } from './lib/toCSS';
import colors from './modules/colors';
import grid from './modules/grid';
import layout from './modules/layout';
import typography from './modules/typography';
import ui from './modules/ui';
import typeset from './modules/typeset';

const MODULES = {
    ...typography,
    ...layout,
    ...ui,
    ...colors,
    ...grid,
    ...typeset
  },
  DEFAULTS = {
    ...Object.keys(MODULES).reduce((acc, cur) => ({ ...acc, [cur]: true }), {}),
    grid: false,
    color: false,
    typeset: false
  };

type ModuleName = keyof typeof MODULES;
export type PollenModule = {
  [module in ModuleName]: { [key: string]: string | number };
};
type ConfigObject = {
  output?: string;
  modules: PollenModule;
};
export type Config = ConfigObject | ((pollen: typeof MODULES) => ConfigObject);

export function defineConfig(config: Config): ConfigObject {
  return typeof config === 'function' ? config(MODULES) : config;
}

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
    config =
      typeof configResults?.config === 'function'
        ? configResults.config(MODULES)
        : configResults?.config,
    outputPath = cliOpts?.output || config?.output || './pollen.css',
    cssMap = mapObject({ ...DEFAULTS, ...config?.modules }, (key, val) => {
      if (!val) {
        return mapObjectSkip;
      }
      return typeof val === 'boolean'
        ? [key, MODULES[key as keyof typeof MODULES]]
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
