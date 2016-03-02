angular
    .module('themesApp', [
        'theme', 'ngRiffle'
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

// Config for Exis
.config(function($riffleProvider) {
    $riffleProvider.setDomain("xs.demo.badgerloop.blapp");
    $riffleProvider.setFabricLocal();
})

//Welcome Alert
.run(['pinesNotifications', function(pinesNotifications) {
    pinesNotifications.notify({
        title: 'BadgerLoop Dashboard Setup',
        text: 'The dashboard is fully setup and running.',
        type: 'success'
    });
}])

//Connect to Exis
.run(function($riffle, $rootScope) {
    $riffle.join();
    $rootScope.$broadcast('$riffle.open'); //Alert everyone that we have joined
});
