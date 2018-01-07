var gulp = require('gulp');

// var imagemin = require('gulp-imagemin');
var path = require('path');
var iconFont = require('gulp-iconfont');
var iconFontCss = require('gulp-iconfont-css');


var base = {
    app: 'app/static/'
};

var paths = {
    scripts: ['scripts/**/*.js', '!scripts/libs/**/*.js'],
    libs: ['scripts/libs/jquery/dist/jquery.js', 'scripts/libs/underscore/underscore.js', 'scripts/backbone/backbone.js'],
    styles: ['styles/**/*.scss'],
    images: ['images/**/*.png'],
    icons: 'icons/svg/*.svg',
    fonts: 'fonts/'
};


//create iconfont from .svg
gulp.task('iconfont', function(){
    var fontName = 'iconfont';
    return gulp.src([path.join(base.app, paths.icons)], {base: 'app/'})
        .pipe(iconFontCss({
            fontName: fontName,
            targetPath: '../../css/icons.scss',
            fontPath: path.join(base.app, paths.fonts, 'icons/')
        }))
        .pipe(iconFont({
            fontName: fontName,
            fontWeight: '400',
            centerHorizontally: true,
            normalize: true,
            formats: ['ttf', 'eot', 'woff', 'woff2', 'svg'], // default, 'woff2' and 'svg' are available
        }))
        .pipe(gulp.dest(path.join(base.app, paths.fonts, 'icons/')));
});


// A development task to run anytime a file changes
gulp.task('watch', function() {
    gulp.watch('app/static/icons/svg/*', ['iconfont']);
});

// Define the default task as a sequence of the above tasks
gulp.task('default', ['iconfont']);