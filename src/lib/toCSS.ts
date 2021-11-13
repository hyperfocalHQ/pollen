import { stringify } from 'javascript-stringify';

export function toCSS(object: { [key: string]: string | number }) {
  return stringify(
    object,
    (value, indent, stringify) =>
      typeof value === 'string' ? value : stringify(value),
    2
  )?.replace(/,\n/g, ';\n');
}
