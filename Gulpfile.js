var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    minifyCSS = require('gulp-minify-css');

gulp.task('default', ['js', 'css', 'fonts']);

gulp.task('css', function () {
    gulp.src(['node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss', 'res/scss/style.scss'])
        .pipe(concat('style.scss'))
        .pipe(sass())
        .pipe(minifyCSS())
        .pipe(gulp.dest('res/public/css/'));
});

gulp.task('js', function () {
    gulp.src('res/js/script.js')
        .pipe(gulp.dest('res/public/js/'));

    // Components
    gulp.src('node_modules/jquery/dist/jquery.min.js')
        .pipe(gulp.dest('res/public/js/'));
    gulp.src('node_modules/bootstrap-sass/assets/javascripts/bootstrap.min.js')
        .pipe(gulp.dest('res/public/js/'));
});

gulp.task('fonts', function () {
    gulp.src('node_modules/bootstrap-sass/assets/fonts/bootstrap/*')
        .pipe(gulp.dest('res/public/fonts/'));
});
