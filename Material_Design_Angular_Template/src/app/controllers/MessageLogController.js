(function(){

  angular
    .module('app')
    .controller('MessagesLogController', [
      'messageLogService',
      MessageLogController
    ]);

  function MessageLogController(messageLogService) {
    var vm = this;

    vm.messages = [];

    messageLogService
      .loadAllItems()
      .then(function(messages) {
        vm.messages = [].concat(messages);
      });
  }

})();