import { kebab } from 'case';
import mapObject from 'map-obj';
import type { PollenModule } from '../../@types/pollen';

export function formatModule(module: PollenModule) {
  return Object.keys(module)
    .map((family) => {
      return mapObject(
        module[family as keyof typeof module],
        (key: string, value: string) => [
          `--${kebab(family)}-${kebab(String(key))}`,
          value
        ]
      );
    })
    .reduce((acc, cur) => ({ ...acc, ...cur }), {});
}
