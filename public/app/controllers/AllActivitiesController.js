/*global angular*/
(function () {
    "use strict";
    function AllActivitiesController(dataService, notifier) {
        var vm = this;
        vm.selectedMonth = 1; // default to January
        vm.allClassrooms = {};
        vm.selectedClassroom = {};
        vm.allActivities = {};

        function showError(message) {
            notifier.error(message);
        }
        dataService.getAllClassrooms()
            .then(function (classrooms) {
                vm.allClassrooms = classrooms;
                vm.selectedClassroom = classrooms[0];
            })
            .catch(showError);
        dataService.getAllActivities()
            .then(function (activities) {
                vm.allActivities = activities;
            })
            .catch(showError);
    }
    angular.module('app')
        .controller('AllActivitiesController', ['dataService', 'notifier', AllActivitiesController]);
}());