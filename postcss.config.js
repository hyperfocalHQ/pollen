module.exports = ({ env }) => ({
  plugins: [
    require('postcss-import')(),
    require('postcss-nesting')(),
    require('postcss-font-family-system-ui')(),
    env === 'production' && require('cssnano')()
  ]
});
