(function(){

  angular
    .module('app')
    .controller('WarningLogController', [
      'warningLogService',
      WarningLogController
    ]);

  function WarningLogController(warningLogService) {
    var vm = this;

    vm.messages = [];

    warningLogService
      .loadAllItems()
      .then(function(messages) {
        vm.messages = [].concat(messages);
      });
  }

})();
