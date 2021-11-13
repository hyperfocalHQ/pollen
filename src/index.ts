#!/usr/bin/env node
import { program } from 'commander';
import { cosmiconfig } from 'cosmiconfig';
import merge, { Options as MergeOptions } from 'deepmerge';
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
    typography,
    layout,
    ui,
    colors,
    grid,
    custom: {}
  },
  DEFAULTS = {
    typography: true,
    layout: true,
    ui: true
  };

type ModuleName = keyof typeof MODULES;
export type PollenModule = {
  [key: string]: { [key: string]: string | number };
};
export type Config = (
  pollen: typeof MODULES,
  merge: (opts: MergeOptions) => PollenModule
) => { output?: string; modules: { [module in ModuleName]: PollenModule } };

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
    config = configResults?.config(MODULES, merge),
    outputPath = cliOpts?.output || config?.output || './pollen.css',
    cssMap = mapObject({ ...DEFAULTS, ...config?.modules }, (key, val) => {
      if (!val) {
        return mapObjectSkip;
      }
      return typeof val === 'boolean'
        ? [key, MODULES[key as keyof typeof MODULES]]
        : ([key, val] as any);
    }),
    output = formatModule(
      Object.keys(cssMap).reduce(
        (obj, cur) => ({ ...obj, ...(cssMap[cur] as any) }),
        {}
      )
    );

  fs.writeFileSync(
    path.resolve(process.cwd(), outputPath),
    `:root ${toCSS(output)}`
  );
})();
