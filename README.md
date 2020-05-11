# Bloom <br/> [![Version](https://img.shields.io/npm/v/bloom-css.svg?style=flat)](https://www.npmjs.com/package/bloom-css) ![Size](https://img.badgesize.io/https://unpkg.com/bloom-css/bloom.css?compression=gzip&label=size)

Bloom is a future-facing, functional CSS microframework built on CSS variables. It helps you rapidly build custom interfaces and encourages consistency in production, as a foundation for your own design system.

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

## Get Bloom

Install Bloom with NPM

```sh
npm i bloom-css
```

Or include it directly from the CDN

```html
<link rel="stylesheet" href="https://unpkg.com/bloom-css/bloom.css" />
```

## Documentation

Read the full documentaion at **[bloom.style](https://bloom.style)**
