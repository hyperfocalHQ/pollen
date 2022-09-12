import { kebab } from 'case';
import mapObject from 'map-obj';
import type { PollenModule } from '../../@types/pollen';
import { stringify } from 'javascript-stringify';

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

export function toCSS(
  selector: string,
  object: { [key: string]: string | number }
) {
  return `${selector} ${stringify(
    object,
    (value, indent, stringify) =>
      typeof value === 'string' ? value : stringify(value),
    2
  )?.replace(/,\n/g, ';\n')}`;
}
