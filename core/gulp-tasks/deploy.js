'use strict';

/* eslint-disable global-require */
var path = require('path');

var gulp = require('gulp');
var install = require('gulp-install');
var runSequence = require('run-sequence');

var basePaths = {
  base: '..',
  payload: './lambda/node/report_thumbnails/report_thumbnails.zip'
};

gulp.task('lambda:npm', function() {
  return gulp.src(path.join(basePaths.base, 'package.json'))
    .pipe(gulp.dest(basePaths.base))
    .pipe(install({production: true}));
});


gulp.task('lambda:build', function(cb) {
  runSequence(
    'lambda:clean',
    'lambda:npm',
    'lambda:js',
    'lambda:zip',
    'lambda:upload',
    cb
  );
});
