'use strict';

const path = require('path');
const gulp = require('gulp');

const shell = require('gulp-shell');
const runSequence = require('run-sequence');

require('require-dir')();

gulp.task('core:amp:deploy:function:shell', false,
  shell
    .task(['sls function deploy -a'], {
      cwd: path.join(__dirname, '..')
    })
);

gulp.task('core:amp:deploy:gateway:shell', 'Deploys AMP Gateways',
  shell
    .task(['sls endpoint deploy'], {
      cwd: path.join(__dirname, '..')
    })
);

gulp.task('core:amp:deploy:function', 'Deploys AMP Lambda Functions', done => {
  runSequence(
    'core:amp:npm:install',
    'core:amp:deploy:function:shell',
    done
  );
});

gulp.task('core:amp:deploy', 'Deploys AMP Function and Gateway', done => {
  runSequence(
    'core:amp:deploy:function',
    'core:amp:deploy:gateway:shell',
    done
  );
});

