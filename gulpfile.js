'use strict';

// Include gulp
const gulp = require('gulp-help')(require('gulp'));

// Gulp packages
const eslint = require('gulp-eslint');
const gutil = require('gulp-util');

// child gulp tasks
require('require-dir')('./core/gulp-tasks');

function errorHandler(error) {
  gutil.log(error.toString());
  this.emit('end');
}

// Top level tasks

gulp.task('lint', 'ESLint all Javascript', () => gulp
  .src('**/*.js')
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError())
  .on('error', errorHandler)
);

