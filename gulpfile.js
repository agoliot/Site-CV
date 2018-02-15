'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var del = require('del');
var runSequence = require('run-sequence');
var browserSync = require('browser-sync').create();

gulp.task('default', ['serve']);

gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./app"
    });

  	gulp.watch('./app/sass/**/*.scss', ['sass']);
    gulp.watch("./app/**/*.html").on('change', browserSync.reload);
});

 
gulp.task('sass', function () {
  return gulp.src('./app/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./app/css'))
    .pipe(browserSync.stream());
});

gulp.task('clean:dist', function() {
  return del.sync('dist');
})