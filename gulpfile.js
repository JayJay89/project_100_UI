'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

/*Run gulp watch*/



/*Sass*/
gulp.task('sass', function () {
    gulp.src('sass/*.scss')
        .pipe(sass({
            outputStyle: 'expanded'
        })
        /*Output-styles*/
        /*
            nested, expanded, compressed, compact
        */
        .on('error', sass.logError))
        .pipe(gulp.dest('css'))
});


/*Watcher*/
gulp.task('watch',['sass'], function(){

    browserSync.init({
        server: "./"
    });

    gulp.watch('sass/*.scss', ['sass'])
    gulp.watch("*.html").on('change', browserSync.reload);
    gulp.watch("css/*.css").on('change', browserSync.reload);
    // gulp.watch("sass/*.scss").on('change', browserSync.reload);
    gulp.watch("*.js").on('change', browserSync.reload);
});
/*This is an example on how to watch sass only*/ 
// gulp.task('sass:watch', function () {
//     gulp.watch('./sass/**/*.scss', ['sass']);
// });


/*Auto Prefixer*/
// gulp.task('autoprefix',function(){
//     gulp.src('css/*.css')
//     .pipe(autoprefixer())
//     .pipe(gulp.dest('postcss'))
// });



