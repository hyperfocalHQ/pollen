#!/usr/bin/env node
import mapObject, { mapObjectSkip } from 'map-obj';
import { ConfigObject } from '../@types/pollen';
import { getConfig, writeFiles } from './lib';
import modules from './modules';

(async () => {
  const config = await getConfig(),
    css = mapObject(config.modules, (key: string, val: string) => {
      if (!val) {
        return mapObjectSkip;
      }
      return typeof val === 'boolean'
        ? [key, modules[key as keyof typeof modules]]
        : ([key, val] as any);
    });

  writeFiles(config as ConfigObject, css);
})();
