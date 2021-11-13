/** @type {import('../').Config} */
module.exports = (pollen, merge) => ({
  output: './addons/color.css',
  modules: {
    typography: false,
    layout: false,
    ui: false,
    colors: true
  }
});
