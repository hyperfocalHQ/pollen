# Pollen <br/> [![Version](https://img.shields.io/npm/v/pollen-css.svg?style=flat)](https://www.npmjs.com/package/pollen-css) ![Size](https://img.badgesize.io/https://unpkg.com/pollen-css/pollen.css?compression=gzip&label=size)

Pollen is a standards-driven alternative to [Tailwind](https://tailwindcss.com) that doesn't reinvent CSS. It's a library of [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/--*) that encourage consistency, maintainability, and rapid development. Use it from prototype to production, as a utility-first foundation for your own design system.

## What it looks like

Pollen's low-level variables can be used to build any design. They work anywhere and don't require a buildstep or class naming conventions. They're easy to extend and globally responsive, without introducing preprocessors or new syntax.

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

## Documentation

Read the full documentaion at **[pollen.style](https://www.pollen.style)**
