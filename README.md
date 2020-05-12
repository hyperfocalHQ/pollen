# Pollen <br/> [![Version](https://img.shields.io/npm/v/pollen-css.svg?style=flat)](https://www.npmjs.com/package/pollen-css) ![Size](https://img.badgesize.io/https://unpkg.com/pollen-css/pollen.css?compression=gzip&label=size)

Pollen is a functional CSS library that provides a consistent foundation for modern design systems. It's featherweight, extensible, built on CSS variables, and ready for the future.

#### What it looks like

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

.button:hover {
  background: var(--color-blue-700);
}
```

## Installation

Install Pollen with NPM, and either import it with your bundler of choice.

```sh
npm i pollen-css
```

```js
import 'pollen-css';
```

Or include it directly from the Unpkg CDN

```html
<link rel="stylesheet" href="https://unpkg.com/pollen-css/pollen.css" />
```

### Shimming IE

Internet explorer doesn't support CSS variables, and Pollen ships with a lightweight, conditionally loaded shim that provides full support for IE.

Use it by calling `shimmie()` from `pollen-css/utils` on your page

```js
import { shimmie } from 'pollen-css/utils';

shimmie();
```

Shimmie will check for CSS variables support, and if required will dynamically load and apply the excellent [`css-vars-ponfyill`](https://jhildenbiddle.github.io/css-vars-ponyfill/#/) shim with sane configuration.

## Usage

Read the full documentaion at **[pollen.style](https://pollen.style)**
