/*jslint indent: 2, maxlen: 80, browser: true */
/*global require, define, jQuery */
(function (factory) {
  'use strict';
  if ('function' === typeof define && define.amd) {
    define(['jquery'], factory); // register anonymous AMD module
  } else { factory(jQuery); } // browser globals
}(function (jQuery) {
  'use strict';
  var $ = jQuery,
    PLUGIN_NAME = 'plugin',
    orig = $.fn[PLUGIN_NAME];

  $.fn[PLUGIN_NAME] = function (action, options) {
    if (!action) {
      options = {};
    } else if ('object' === $.type(action)) {
      options = action;
    } else {
      options = $.extend(options || {}, {action: action});
    }//end if: got options

    return $(this).each(function () {
      var settings = $.extend({}, $.fn[PLUGIN_NAME].defaults, options);
      // PLUGIN
    });
  };

  $.extend($.fn[PLUGIN_NAME], {
    defaults: {},
    noconflict: function () { return orig; }
  });


  // export the plugin
  return $.fn[PLUGIN_NAME];
}));
