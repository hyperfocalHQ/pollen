#!/usr/bin/env node
import { program } from 'commander';
import { cosmiconfig } from 'cosmiconfig';
import fs from 'fs';
import mapObject, { mapObjectSkip } from 'map-obj';
import path from 'path';
import { ConfigObject, PollenModule } from '../@types/pollen';
import { formatModule, toCSS } from './lib';
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
      : config.output!;

  fs.writeFileSync(
    path.resolve(process.cwd(), output.css!),
    `/**
* THIS IS AN AUTO-GENERATED FILE
* Edit Pollen config to update
*/
${toCSS(config?.selector || ':root', formatModule(data))}`
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
    ) as PollenModule;

  writeFiles(config, css);
}

run();
