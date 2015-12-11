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
    /*This reloads browser everytime there's a change*/
    /*
        Note that this should be here and not above
        Browser will not reload automatically if it's on top
        you had to press save twice for that to happen
        it works okay if the .pipe is here
    */
    .pipe(browserSync.reload({
      stream: true
    }))
})

/*Browser Sync*/
// https://css-tricks.com/gulp-for-beginners/
// gulp.task('browserSync', function() {
//   browserSync({
//     server: {
//       baseDir: 'app'
//     },
//   })
// })

gulp.task('browserSync', function() {
  browserSync({
    server: "./"
  })
})

/*Watcher*/
gulp.task('watch',['browserSync', 'sass'], function(){
    gulp.watch('sass/*.scss', ['sass'])
    gulp.watch('css/*.css', ['autoprefix'])
});
