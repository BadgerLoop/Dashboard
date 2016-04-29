var haStats = require('haproxy-stats');
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
    $riffleProvider.setFabric("ws://192.168.99.100:8000");
    $riffleProvider.setDomain("xs.node.sender");
    //$riffleProvider.setDomain("xs.demo.badgerloop.blapp.Container.spammer");
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
    //$riffle.setToken("zXMXlKCSoPpQatu9opgKYodSuHdrAzRsTUU9yzr4J4cN.sYp9a3pAO4M.LgCsdt2uF.1TCRq0gDcqkFvi5CTDQMo92MmSxGFRWyi0eGOF3OIbiNNNtc5bNL5FAPsqvzVTYsEMbBQqOGQKuFGuSalQxaNykoCzKySlL8G3a.Xu2g_");
    function join_riffle(){
        $riffle.join();
    }
    try {
    join_riffle();
    }
    catch(err) {
        console.log("lost connection to node get new one")
        join_riffle();
    }
    
});
