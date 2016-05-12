var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('css',function() {
  return gulp.src('./templates/*.styl')
    .pipe($.stylus())
    .pipe($.autoprefixer())
    .pipe(gulp.dest('./build'))
});

gulp.task('email', ['css'],function() {
  return gulp.src('./**/*.jade')
    .pipe($.jade({pretty:true}))
    .pipe(gulp.dest('./build'))
    .pipe($.juice())
    .pipe(gulp.dest('./build'))
});

gulp.task('default',['email']);
