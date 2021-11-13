#!/usr/bin/env node
import { cosmiconfig } from 'cosmiconfig';
import deepmerge from 'deepmerge';
import fs from 'fs';
import mapObject, { mapObjectSkip } from 'map-obj';
import colors from './modules/colors';
import grid from './modules/grid';
import layout from './modules/layout';
import typography from './modules/typography';
import ui from './modules/ui';
import { formatModule } from './lib/formatModule';
import { toCSS } from './lib/toCSS';
import path from 'path';
import { program } from 'commander';

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
type Module = { [key: string]: { [key: string | number]: string | number } };

export type Config = (
  pollen: typeof MODULES,
  merge: typeof deepmerge
) => { [module in ModuleName]: Module };

program
  .option('-o, --output <path>', 'output file path')
  .option('-c, --config <path>', 'config file path');
program.parse(process.argv);

(async () => {
  const cliOpts = program.opts(),
    cosmic = cliOpts.config
      ? await cosmiconfig('pollen').load(cliOpts.config)
      : await cosmiconfig('pollen').search(),
    config = cosmic?.config(MODULES, deepmerge),
    outputPath = cliOpts.output || config.output || './pollen.css',
    cssMap = mapObject({ ...DEFAULTS, ...config.modules }, (key, val) => {
      if (!val) {
        return mapObjectSkip;
      }
      if (typeof val === 'boolean') {
        return [key, MODULES[key as keyof typeof MODULES]];
      }
      return [key, val] as any;
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
