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
    $riffleProvider.setDomain("xs.node");
    $riffleProvider.setFabric("ws://badgerloop-nuc-2:9000");
    // $riffleProvider.setFabricLocal(); FOR LOCAL NODE USE
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
    // $riffle.setToken("zXMXlKCSoPpQatu9opgKYodSuHdrAzRsTUU9yzr4J4cN.sYp9a3pAO4M.LgCsdt2uF.1TCRq0gDcqkFvi5CTDQMo92MmSxGFRWyi0eGOF3OIbiNNNtc5bNL5FAPsqvzVTYsEMbBQqOGQKuFGuSalQxaNykoCzKySlL8G3a.Xu2g_");
    $riffle.join();
});
