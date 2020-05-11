# Pollen <br/> [![Version](https://img.shields.io/npm/v/pollen-css.svg?style=flat)](https://www.npmjs.com/package/pollen-css) ![Size](https://img.badgesize.io/https://unpkg.com/pollen-css/bloom.css?compression=gzip&label=size)

Pollen is a functional utility-first CSS framework built on CSS variables. It helps you rapidly build custom interfaces and encourages consistency as a foundation for your own design system.

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

## Get Pollen

Install Pollen with NPM

```sh
npm i pollen-css
```

Or include it directly from the CDN

```html
<link rel="stylesheet" href="https://unpkg.com/pollen-css/pollen.css" />
```

## Documentation

Read the full documentaion at **[pollen.style](https://pollen.style)**
