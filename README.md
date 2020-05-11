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

Install Pollen with NPM

```sh
npm i pollen-css
```

Or include it directly from the CDN

```html
<link rel="stylesheet" href="https://unpkg.com/pollen-css/pollen.css" />
```

## Usage

Read the full documentaion at **[pollen.style](https://pollen.style)**
