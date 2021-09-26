# Pollen <br/> [![Version](https://img.shields.io/npm/v/pollen-css.svg?style=flat)](https://www.npmjs.com/package/pollen-css) ![Size](https://img.badgesize.io/https://unpkg.com/pollen-css/pollen.css?compression=gzip&label=size)

Pollen is a library of [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/--*) for rapid prototyping, consistent styling, and as a [utility-first](https://frontstuff.io/in-defense-of-utility-first-css) foundation for your own design systems. Heavily inspired by [TailwindCSS](https://tailwindcss.com).

## What it looks like

Pollen has no buildstep, class naming conventions, or framework dependencies. It works in stylesheets, inline styles, and CSS-in-JS.

```css
.button {
  font-family: var(--font-sans);
  font-size: var(--scale-00);
  font-weight: var(--font-medium);
  padding: var(--size-2) var(--size-3);
  background: var(--color-blue);
  color: white;
  border-radius: var(--radius);
  box-shadow: var(--elevation-2);
}
```

<button style="all: unset; font-family: sans-serif; font-size:
0.875rem; font-weight: 500; padding: 8px 12px; background: #4299e1; color: white; border-radius: 4px; box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06); cursor: pointer;">Button</button>

## Modules

- [Typography system](https://www.pollen.style/modules/typography)
- [Color palette](https://www.pollen.style/modules/colors)
- [Layout](https://www.pollen.style/modules/layout)
- [UI constants](https://www.pollen.style/modules/ui)

## Installation

Install Pollen from NPM and include it in your project

```bash
npm i pollen-css
```

```javascript
import 'pollen-css';
```

#### Alternatively include from a CDN

You can also link Pollen's CSS directly from the Unpkg CDN

```markup
<link rel="stylesheet" href="https://unpkg.com/pollen-css/pollen.css" />
```

The entire library weighs under 1.3kb and has zero runtime, so there's nothing to optimise.

## Shimming IE

Pollen requires a small shim to work in Internet Explorer, as it doesn't support the CSS variables that the library is built on.

Enable IE support with the included `shimmie` utility from `pollen-css/utils`

```javascript
import { shimmie } from 'pollen-css/utils';

shimmie();
```

Shimmie will check for support, and if required dynamically load and apply the excellent [`css-vars-ponfyill`](https://jhildenbiddle.github.io/css-vars-ponyfill/#/) shim with sane configuration.

## Editor Support

For autocomplete support of all of Pollen's variables in VS Code:

1. Install the [CSS Var Complete](https://marketplace.visualstudio.com/items?itemName=phoenisx.cssvar) extension
2. Add Pollen to the extension's file settings in `.vscode/settings.json`
3. If you're using CSS-in-JS make sure you add `javascript`/`javascriptreact`/`typescriptreact` file support to the extension's settings

```javascript
{
  "cssvar.files": [
    "./node_modules/pollen-css/pollen.css"
  ],

  // CSS-in-JS support
  "cssvar.extensions": ["css", "javascript", "typescriptreact"]
}
```

Autocomplete will then be available for all properties. Intellisense will trigger simply with `--`, no need to also add `var(`.
## Usage

Read the full documentaion at **[pollen.style](https://www.pollen.style)**
