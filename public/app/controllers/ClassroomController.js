 /*global angular*/
(function () {
    "use strict";
    function ClassroomController() {
        var vm = this;
        vm.test = {};
    }
    angular.module('app')
        .controller('ClassroomController', [ClassroomController]);

}());