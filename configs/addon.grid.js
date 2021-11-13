/** @type {import('../').Config} */
module.exports = () => ({
  output: './addons/grid.css',
  modules: {
    scale: false,
    font: false,
    line: false,
    letter: false,
    prose: false,
    size: false,
    width: false,
    radius: false,
    blur: false,
    layer: false,
    elevation: false,
    easing: false,
    grid: true
  }
});
