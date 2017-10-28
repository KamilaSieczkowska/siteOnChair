var gulp = require('gulp');
var browserSync = require('browser-sync');
var scss = require('gulp-ruby-sass');
var rename = require("gulp-rename");
var sourcemaps = require('gulp-sourcemaps');

var Files = {

    html : './index.html',
    css_dest : './css',
    scss : './scss/main.scss'

};


gulp.task('scss', function(){

    return scss(Files.scss, {
        style: 'expanded',
        sourcemap: true
    })
        .on('error', scss.logError)
        .pipe(sourcemaps.write())
        .pipe(rename('style.css'))
        .pipe(gulp.dest(Files.css_dest))
        .pipe(browserSync.reload({stream: true}));

});

gulp.task('default', ['scss'], function(){
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch('./scss/**/*.scss', ['scss']);
    gulp.watch(Files.html, browserSync.reload);
});
