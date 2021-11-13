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

const MODULES = {
    ...typography,
    ...layout,
    ...ui,
    ...colors,
    ...grid
  },
  DEFAULTS = {
    ...Object.keys(MODULES).reduce((acc, cur) => ({ ...acc, [cur]: true }), {}),
    grid: false,
    color: false
  };

type ModuleName = keyof typeof MODULES;
export type PollenModule = {
  [module in ModuleName]: { [key: string]: string | number };
};
export type Config = (pollen: typeof MODULES) => {
  output?: string;
  modules: PollenModule;
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
    config = configResults?.config(MODULES),
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
    `:root ${toCSS(formatModule(cssMap))}`
  );
})();
