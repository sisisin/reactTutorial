var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');

gulp.task('js', function() {
  browserify(['./src/js/react.js'])
    .transform(reactify)
    .bundle()
    .on('error', function(err) {
      console.log(err.message);
      this.emit('end');
    })
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./build/js/'));
});

gulp.task('watch', function() {
  gulp.watch(['src/**/*.js'], ['js']);
});