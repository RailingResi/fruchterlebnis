module.exports = {
  html        : false,
  images      : true,
  fonts       : true,
  svgSprite   : false,
  stylesheets : true,

  browserSync: {
    proxy: 'localhost:3000',
    files: ['app/**/*'],
  },

  javascripts: {
    publicPath: '/assets/javascripts',
    entry: {
      app: ['./app.js']
    },
    provide: {
        $: "jquery",
        jQuery: "jquery"
    }
  },
  additionalTasks: {
      initialize(gulp, PATH_CONFIG, TASK_CONFIG) {
          var path = require('path');
          var iconfont = require('gulp-iconfont');
          var iconfontCss = require('gulp-iconfont-css');
          var watch  = require('gulp-watch')

          var paths = {
              scripts: [
                  path.resolve(process.env.PWD, PATH_CONFIG.src, PATH_CONFIG.javascripts.src, '**/*.js'),
                  '!' + path.resolve(process.env.PWD, PATH_CONFIG.src, PATH_CONFIG.javascripts.src, '**/*.js')
              ],
              libs: ['scripts/libs/jquery/dist/jquery.js', 'scripts/libs/underscore/underscore.js', 'scripts/backbone/backbone.js'],
              styles: ['styles/**/*.css'],
              images: ['images/**/*.png'],
          };

          gulp.task('iconfont', function(){
              var src = path.resolve(process.env.PWD, PATH_CONFIG.src, PATH_CONFIG.icons.src, '*.svg');
              var dest = path.resolve(process.env.PWD, PATH_CONFIG.src, PATH_CONFIG.fonts.src, 'icons');
              var fontName = 'iconfont';
              gulp.src([src])
                  .pipe(iconfontCss({
                      fontName: fontName,
                      targetPath: '../../stylesheets/modules/_icons.scss',
                      fontPath: '../fonts/icons/'
                  }))
                  .pipe(iconfont({
                      fontName: fontName,
                      fontWeight: '400',
                      centerHorizontally: true,
                      normalize: true,
                      formats: ['ttf', 'eot', 'woff', 'woff2'], // default, 'woff2' and 'svg' are available
                  }))
                  .pipe(gulp.dest(dest));
          });
      },
      development: {
          prebuild: ['iconfont']
      }
  }
}
