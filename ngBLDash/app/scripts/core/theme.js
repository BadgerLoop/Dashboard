angular
  .module('theme.core', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ngAnimate',
    'easypiechart',
    'NgSwitchery',
    'sun.scrollable',
    'ui.bootstrap',
    'ui.select',
    'theme.core.templates',
    'theme.core.template_overrides',
    'theme.core.directives',
    'theme.core.main_controller',
    'theme.core.navigation_controller',
    'theme.core.messages_controller',
    'theme.core.notifications_controller',
//  'oc.lazyLoad',                                  //WE SHOULD BE EAGER LOADING IN MY OPINION
    'theme.core.modules.calendar',
    'theme.core.modules.nvd3_charts',
    'theme.core.modules.flot_charts',
    'theme.core.modules.ui_components',
    'theme.core.modules.basic_tables',
    'theme.core.modules.boxed_layout',
    'theme.core.modules.horizontal_layout',
    'theme.core.modules.dashboard',
    'theme.core.modules.gallery',
    'theme.core.modules.google_maps',
    'theme.core.modules.ng_grid',
  ])
  .constant('nanoScrollerDefaults', {
    nanoClass: 'scroll-pane',
    paneClass: 'scroll-track',
    sliderClass: 'scroll-thumb',
    contentClass: 'scroll-content'
  })
  .run(['$window', function ($window) {
    $window.ngGrid.config = {
        footerRowHeight: 40,
        headerRowHeight: 40,
        rowHeight: 40
    };

    
  }]);


