angular
    .module('themesApp', [
        'theme'
    ])
    .config(['$provide', '$routeProvider', function($provide, $routeProvider) {
        'use strict';
        $routeProvider
            .when('/', {
                templateUrl: 'views/index.html',
            })
            .when('/:templateFile', {
                templateUrl: function(param) {
                    return 'views/' + param.templateFile + '.html';
                }
            })
            .when('#', {
                templateUrl: 'views/index.html',
            })
            .otherwise({
                redirectTo: '/'
            });
    }])

//Welcome Alert
.run(['pinesNotifications', function(pinesNotifications) {
    pinesNotifications.notify({
        title: 'BadgerLoop Dashboard Setup',
        text: 'The dashboard is fully setup and running.',
        type: 'success'
    });
}]);
