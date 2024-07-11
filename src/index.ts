#!/usr/bin/env node
import mapObject, { mapObjectSkip } from "map-obj";
import { type ConfigObject } from "../@types/pollen";
import { getConfig, writeFiles } from "./lib";
import modules from "./modules";

(async () => {
  const config = await getConfig();
  const css = mapObject(
    config.modules,
    (key: string, val: { [property: string]: string } | boolean) => {
      if (val === false) {
        return mapObjectSkip;
      }

      return typeof val === "object"
        ? ([key, val] as any)
        : [key, modules[key as keyof typeof modules]];
    },
  );

  writeFiles(config as ConfigObject, css);
})();
