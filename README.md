# Pollen <br/> [![Version](https://img.shields.io/npm/v/pollen-css.svg?style=flat)](https://www.npmjs.com/package/pollen-css) ![Size](https://img.badgesize.io/https://unpkg.com/pollen-css/pollen.css?compression=gzip&label=size)

Pollen is a collection of [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/--*) designed for rapid prototyping, consistent styling, and as a [utility-first](https://frontstuff.io/in-defense-of-utility-first-css) foundation for your own design systems.

## What it looks like

Pollen has no buildstep, class naming conventions, or framework gotchas. It works in stylesheets, inline styles, and CSS-in-JS.

```css
.button {
  font: var(--font-sans);
  padding: var(--spacing-1);
  background: var(--color-blue);
  color: white;
  border-radius: var(--radius-2);
  box-shadow: var(--elevation-1);
  transition: background 150ms var(--easing-standard);
}
```

## Modules

- [Typography system](modules/typography.md)
- [Color palette](modules/colors.md)
- [Layout scales](modules/layout.md)
- [UI library](modules/layout.md)

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

The entire library weighs **under** **1.5kb**, so there's no need to worry about how you bundle or optimise it.

## Shimming IE

Pollen requires a small shim to work in Internet Explorer, as it doesn't support the CSS variables that the library is built on.

Enable IE support with the included `shimmie` utility from `pollen-css/utils`

```javascript
import { shimmie } from 'pollen-css/utils';

shimmie();
```

Shimmie will check for support, and if required dynamically load and apply the excellent [`css-vars-ponfyill`](https://jhildenbiddle.github.io/css-vars-ponyfill/#/) shim with sane configuration.

## Usage

Read the full documentaion at **[pollen.style](https://pollen.style)**
