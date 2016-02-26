angular
  .module('theme.demos', [
    'oc.lazyLoad',
    'theme.demos.calendar',
    'theme.demos.nvd3_charts',
    'theme.demos.flot_charts',
    'theme.demos.ui_components',
    'theme.demos.basic_tables',
    'theme.demos.boxed_layout',
    'theme.demos.horizontal_layout',
    'theme.demos.dashboard',
    'theme.demos.gallery',
    'theme.demos.google_maps',
    'theme.demos.ng_grid',
  ])
  .directive('img', ['$timeout', function ($t) {
      // NOTE: this affects all <img> tags
      // Remove this directive for production
    'use strict';
      return {
      restrict: 'E',
      link: function (scope, element) {
        $t ( function () {
            var src = element.attr('src') || element.attr('ng-src');
          if (src.match(/assets\/demo/)) {
            element.attr('src', 'http://placehold.it/400&text=Placeholder');
          }
        }, 10);
      }
      };
  }]);