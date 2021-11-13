/** @type {import('../').Config} */
module.exports = (pollen, merge) => ({
  output: './addons/grid.css',
  modules: {
    typography: false,
    layout: false,
    ui: false,
    grid: true
  }
});
