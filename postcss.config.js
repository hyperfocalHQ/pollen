module.exports = ({ env }) => ({
  plugins: [
    require('postcss-import')(),
    require('postcss-nesting')(),
    require('postcss-custom-media')(),
    require('postcss-font-family-system-ui')(),
    env === 'production' ? require('cssnano')() : false,
  ],
});
