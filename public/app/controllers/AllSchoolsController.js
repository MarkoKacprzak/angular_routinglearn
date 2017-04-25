 /*global angular*/
(function () {
    "use strict";
    function AllSchoolsController(dataService, notifier) {
        var vm = this;
        vm.allSchools = {};
        function showError(message) {
            notifier.error(message);
        }
        dataService.getAllSchools()
            .then(function (schools) {
                vm.allSchools = schools;
            })
            .catch(showError);
    }
    angular.module('app')
        .controller('AllSchoolsController', ['dataService', 'notifier', AllSchoolsController]);
}());