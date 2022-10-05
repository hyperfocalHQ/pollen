<h1 align="center"> Pollen </h1> <br>
<p align="center">
  <a href="https://www.pollen.style/">
    <img alt="Pollen" title="Pollen" src="https://i.imgur.com/wensu33.png" width="200">
  </a>
</p>

<h3 align="center">The CSS variables build system</h3>

<p align="center">
  <img src="https://img.shields.io/npm/v/pollen-css.svg?style=flat" />
  <img src="https://img.badgesize.io/https://unpkg.com/pollen-css/pollen.css?compression=gzip&label=size">
  <img src="https://github.com/heybokeh/pollen/actions/workflows/main.yml/badge.svg">
  <img src="https://img.shields.io/npm/l/pollen-css">
</p>
  
<br/>

Pollen is a highly configurable library of CSS variables for your next design system. It lets you write faster, more consistent, and more maintainable styles.

Made and maintained with ❤️ by the fine people at [Bokeh](https://bokeh.photo).

### Features

- Robust library of well-considered, style-agnostic CSS variables
- Fully configurable and extensible with CLI build tool
- Zero setup required to get started
- Responsive with configurable `@media` and `@supports` queries
- Lightweight, human-readable output if you ever want to move away from Pollen

### What it looks like

Pollen's design tokens can be used to build any project. They're easy to customise and extend and they don't require preprocessors, class naming conventions, or non-standard syntax. Generate an entirely custom design system with a simple config file.

<p align="center">
  <img src="https://i.imgur.com/ZNfrTAz.jpg" width="750">
</p>

## How it works

#### 1. Configure your design system

`pollen.config.js`

```js
module.exports = (pollen) => ({
  output: './pollen.css',
  modules: {
    ...pollen,
    color: {
      ...pollen.colors,
      bg: 'white',
      text: 'var(--color-black)'
    }
  },
  media: {
    '(prefers-color-scheme: dark)': {
      color: {
        bg: 'var(--color-black)',
        text: 'white'
      }
    }
  }
});
```

#### 2. Build your CSS

```sh
$ pollen
```

#### 3. Use the CSS

`index.html`

```html
<link href="/pollen.css" rel="stylehseet" />
```

## What it includes

Pollen's default variables include expertly crafted modules for:

- Font sizes
- Fluid font sizes
- Font sets
- Font weights
- Line heights
- Letter spacings
- Prose widths
- Size scale
- Container widths
- Aspect ratios
- Color pallete
- Border radiuses
- Blurs
- Z-index layers
- Box shadows
- Easing functions
- Page grid
- Content grids

## Documentation

Read the full documentation at **[pollen.style](https://www.pollen.style)**
