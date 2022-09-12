import { describe, expect, test } from 'vitest';
import { formatModule, toCSS } from '.';

const FIXTURES = {
    format: {
      a: {
        property: 'value',
        camelCase: 'value',
        numeric: 0
      },
      bModule: {
        property: 'value'
      }
    },
    css: {
      '--a-camel-case': 'value',
      '--a-numeric': 0,
      '--a-property': 'value'
    }
  },
  EXPECTED = {
    format: `
    {
      "--a-camel-case": "value",
      "--a-numeric": 0,
      "--a-property": "value",
      "--b-module-property": "value",
    }
  `,
    css: `
    ":root {
      --a-camel-case: value;
      --a-numeric: 0;
      --a-property: value
    }"
  `
  };

describe('formatModule()', () => {
  test('formats modules correctly', () => {
    expect(formatModule(FIXTURES.format as any)).toMatchInlineSnapshot(
      EXPECTED.format
    );
  });
});

describe('toCSS()', () => {
  test('turns JSON into CSS', () => {
    expect(toCSS(':root', FIXTURES.css)).toMatchInlineSnapshot(EXPECTED.css);
  });
});
