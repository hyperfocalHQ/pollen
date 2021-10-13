module.exports = ({ env }) => ({
  plugins: [
    require('postcss-font-family-system-ui')(),
    env === 'production' && require('cssnano')()
  ]
});
