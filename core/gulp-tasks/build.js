'use strict';

const gulp = require('gulp');
const install = require('gulp-install');

const ampPath = require('./utils').ampPath;

gulp.task('core:amp:npm:install', false, () => gulp
  .src(ampPath('package.json'))
  .pipe(gulp.dest(ampPath()))
  .pipe(install({ production: true }))
);
