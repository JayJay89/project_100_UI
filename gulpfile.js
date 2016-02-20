'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync');

/*Run gulp watch*/

/*Sass*/
gulp.task('sass', function () {
    gulp.src('sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('css'))
});

/*This is an example on how to watch sass only*/ 
// gulp.task('sass:watch', function () {
//     gulp.watch('./sass/**/*.scss', ['sass']);
// });


/*Auto Prefixer*/
gulp.task('autoprefix',function(){
    gulp.src('css/*.css')
    .pipe(autoprefixer())
    .pipe(gulp.dest('postcss'))
})


/*Watcher*/
gulp.task('watch',['sass'], function(){

    browserSync.init({
        server: "./"
    });

    gulp.watch('sass/*.scss', ['sass'])
    gulp.watch('css/*.css', ['autoprefix'])
    gulp.watch("*.html").on('change', browserSync.reload);
    gulp.watch("postcss/*.css").on('change', browserSync.reload);
    gulp.watch("*.js").on('change', browserSync.reload);
});