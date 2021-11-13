import Case from 'case';
import mapObject from 'map-obj';

type Module = { [key: string]: { [key: string | number]: string | number } };

Case.type('variable', function (s) {
  return Case.kebab(s.match(/[a-zA-Z]+|[0-9]+/g)!.join('-'));
});

export function formatModule(module: Module) {
  return Object.keys(module)
    .map((family) => {
      return mapObject(module[family], (key, value) => [
        `--${(Case as any).variable(family)}-${(Case as any).variable(
          String(key)
        )}`,
        value
      ]);
    })
    .reduce((acc, cur) => ({ ...acc, ...cur }), {});
}
