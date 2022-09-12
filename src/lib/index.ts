import { kebab } from 'case';
import mapObject from 'map-obj';
import type { CustomModule, PollenModule, Query } from '../../@types/pollen';
import { stringify } from 'javascript-stringify';
import prettier from 'prettier/standalone';
import prettierCSS from 'prettier/parser-postcss';

/**
 * Configured Prettier instance
 */
export function format(css: string) {
  return prettier.format(css, {
    parser: 'css',
    plugins: [prettierCSS]
  });
}

/**
 * Formats object of properties to JSON output of CSS variables
 */
export function formatModule(module: PollenModule & CustomModule) {
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

/**
 * Formats flat object to CSS string
 */
export function toCSS(
  selector: string,
  object: { [key: string]: string | number }
) {
  return format(
    `${selector} ${stringify(
      object,
      (value, indent, stringify) =>
        typeof value === 'string' ? value : stringify(value),
      2
    )?.replace(/,\n/g, ';\n')}`
  );
}

/**
 * Formats query objects to CSS strings
 */
export function queriesToCSS(
  selector: string,
  data: {
    [type: string]: Query;
  }
) {
  return format(
    `${Object.keys(data)
      .map((type) => {
        return `${Object.keys(data[type])
          .map((query) => {
            return `@${type} ${query} { ${toCSS(
              selector,
              formatModule(data[type][query] as any)
            )}}`;
          })
          .join('\n')}`;
      })
      .join('\n')}`
  );
}
