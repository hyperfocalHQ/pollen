import { describe, expect, test } from "vitest";
import { formatModule, queriesToCSS, toCSS } from ".";

const FIXTURES = {
  format: {
    a: {
      property: "value",
      camelCase: "value",
      numeric: 0,
    },
    b: {
      property: "value",
    },
  },
  css: {
    "--a-camelCase": "value",
    "--a-numeric": 0,
    "--a-property": "value",
  },
  cssQueries: {
    media: {
      "(min-width: 640px)": {
        a: {
          property: "value",
        },
        b: {
          property: "value",
        },
      },
      "(min-width: 960px)": {
        a: {
          property: "value",
        },
      },
    },
    supports: {
      "not (display: grid)": {
        c: {
          property: "value",
        },
        d: {
          property: "value",
        },
      },
    },
  },
};
const EXPECTED = {
  format: `
    {
      "--a-camelCase": "value",
      "--a-numeric": 0,
      "--a-property": "value",
      "--b-property": "value",
    }
  `,
  css: `
    ":root {
      --a-camelCase: value;
      --a-numeric: 0;
      --a-property: value
    }"
  `,
  cssQueries: `
    "@media (min-width: 640px) { :root {
      --a-property: value;
      --b-property: value
    }}
    @media (min-width: 960px) { :root {
      --a-property: value
    }}
    @supports not (display: grid) { :root {
      --c-property: value;
      --d-property: value
    }}"
    `,
};

describe("formatModule()", () => {
  test("formats modules correctly", () => {
    expect(formatModule(FIXTURES.format as any)).toMatchInlineSnapshot(
      EXPECTED.format,
    );
  });
});

describe("toCSS()", () => {
  test("turns property object into CSS", () => {
    expect(toCSS(":root", FIXTURES.css)).toMatchInlineSnapshot(EXPECTED.css);
  });
});

describe("queriesToCSS()", () => {
  test("turns query object into CSS", () => {
    expect(
      queriesToCSS(":root", FIXTURES.cssQueries as any),
    ).toMatchInlineSnapshot(EXPECTED.cssQueries);
  });
});
