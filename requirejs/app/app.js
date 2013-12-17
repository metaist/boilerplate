/*jslint indent: 2, maxlen: 120, browser: true */
/*global requirejs, require, define */
requirejs.config({
  baseUrl: 'lib',
  paths: {
    // TODO (#1): add local backup to CDNs
    'app': '../app',
    'bootstrap': 'http://netdna.bootstrapcdn.com/bootstrap/3.0.3/js/bootstrap.min',
    'jquery': 'http://code.jquery.com/jquery.min',
    'text': 'http://cdnjs.cloudflare.com/ajax/libs/require-text/2.0.10/text'
  },

  shim: {
    'bootstrap': ['jquery']
  }
});

define(function (require) {
  'use strict';
  require('bootstrap');
  var $ = require('jquery'),
    app = { version: '0.0.1pre' };

  $('html').removeClass('no-js');

  return app;
});
