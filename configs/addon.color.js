/** @type {import('../').Config} */
module.exports = () => ({
  output: './addons/color.css',
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
    color: true
  }
});
