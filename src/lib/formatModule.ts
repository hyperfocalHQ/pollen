import { kebab } from 'case';
import mapObject from 'map-obj';
import type { ModuleName, PollenModule } from '../types';

const ALIAS_MAP: ReadonlyMap<ModuleName, string[]> = new Map([
  ['elevation', ['shadow']],
]);

export function formatModule(module: PollenModule) {
  return Object.keys(module)
    .flatMap((family) => {
      const candidates = [family];
      const aliases = ALIAS_MAP.get(family as keyof typeof module);
      aliases && candidates.push(...aliases);
      return candidates.map((candidate) => mapObject(module[family as keyof typeof module], (key, value) => [
        `--${kebab(candidate)}-${kebab(String(key))}`,
        value
      ]));
    })
    .reduce((acc, cur) => ({ ...acc, ...cur }), {});
}
