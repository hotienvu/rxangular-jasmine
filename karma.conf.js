// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html
'use strict';
/* white: false */

module.exports = function(config) {
  config.set({
    // base path, that will be used to resolve files and exclude
    basePath: '',

    // testing framework to use (jasmine/mocha/qunit/...)
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
    'lib/angular/1.1.5/angular.min.js',
    'lib/angular/1.1.5/angular-mocks.js',
    'lib/rx.min.js',
    'lib/rx.angular.js',
    'tests/*.js'
    ],

    // list of files / patterns to exclude
    exclude: [],

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['Chrome'],

    plugins: [
        'karma-chrome-launcher',
        'karma-script-launcher',
        'karma-jasmine'
    ],


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false
  });
};
