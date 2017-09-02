const mix = require('laravel-mix');

mix.js('resources/assets/js/app.js', 'public/build/js')
  .sass('resources/assets/sass/app.scss', 'public/build/css');

mix.browserSync({
  notify: false,
  injectChanges: false,
  proxy: 'podcastor.dev',
  files: [
    'public/build/css/*',
    'public/build/js/*',
    'resources/views/**/*.php',
  ],
});
