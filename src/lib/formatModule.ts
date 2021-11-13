import Case from 'case';
import mapObject from 'map-obj';
import type { PollenModule } from '..';

Case.type('variable', function (s) {
  return Case.kebab(s.match(/[a-zA-Z]+|[0-9]+/g)!.join('-'));
});

export function formatModule(module: PollenModule) {
  return Object.keys(module)
    .map((family) => {
      return mapObject(module[family as keyof typeof module], (key, value) => [
        `--${(Case as any).variable(family)}-${(Case as any).variable(
          String(key)
        )}`,
        value
      ]);
    })
    .reduce((acc, cur) => ({ ...acc, ...cur }), {});
}
