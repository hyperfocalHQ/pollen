import { kebab } from 'case';
import mapObject from 'map-obj';

type Module = { [key: string]: { [key: string | number]: string | number } };

export function formatModule(module: Module) {
  return Object.keys(module)
    .map((family) => {
      return mapObject(module[family], (key, value) => [
        `--${kebab(family)}-${kebab(String(key))}`,
        value
      ]);
    })
    .reduce((acc, cur) => ({ ...acc, ...cur }));
}
