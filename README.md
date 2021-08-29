# Pollen <br/> [![Version](https://img.shields.io/npm/v/pollen-css.svg?style=flat)](https://www.npmjs.com/package/pollen-css) ![Size](https://img.badgesize.io/https://unpkg.com/pollen-css/pollen.css?compression=gzip&label=size)

Pollen is a library of [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/--*) for rapid prototyping, consistent styling, and as a [utility-first](https://frontstuff.io/in-defense-of-utility-first-css) foundation for your own design systems. Heavily inspired by [TailwindCSS](https://tailwindcss.com).

## What it looks like

Pollen has no buildstep, class naming conventions, or framework dependencies. It works in stylesheets, inline styles, and CSS-in-JS.

```css
.button {
  font: var(--font-sans);
  font-weight: var(--font-medium);
  padding: var(--size-1);
  background: var(--color-blue);
  color: white;
  border-radius: var(--radius-2);
  box-shadow: var(--elevation-1);
  transition: background 150ms var(--easing-standard);
}
```

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

The entire library weighs **under 1.5kb** and has zero runtime, so there's nothing to optimise.

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

1. Install the [CSS Variable Autocomplete](https://marketplace.visualstudio.com/items?itemName=vunguyentuan.vscode-css-variables) extension
2. Add Pollen to the extensions lookup files in `.vscode/settings.json`

```json
{
  "cssVariables.lookupFiles": ["node_modules/pollen-css/pollen.css"]
}
```

Autocomplete will then be available for all properties. Begin typing the property name without `var(`, eg: `font-size: scale...` and intellisense will do the rest.

## Usage

Read the full documentaion at **[pollen.style](https://www.pollen.style)**
