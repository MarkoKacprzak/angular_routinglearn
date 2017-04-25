/*global angular*/
(function () {
    "use strict";
    function AllActivitiesController(dataService, notifier, $location, activities) {
        var vm = this;
        vm.selectedMonth = 1; // default to January
        vm.search = function () {
            var classroom_detail_url = '/classrooms/' + vm.selectedClassroom.id + '/detail/' + vm.selectedMonth;
            $location.url(classroom_detail_url);
        }
        vm.allClassrooms = {};
        vm.selectedClassroom = {};
        vm.allActivities = activities;

        function showError(message) {
            notifier.error(message);
        }
        dataService.getAllClassrooms()
            .then(function (classrooms) {
                vm.allClassrooms = classrooms;
                vm.selectedClassroom = classrooms[0];
            })
            .catch(showError);
            /*
        dataService.getAllActivities()
            .then(function (activities) {
                vm.allActivities = activities;
            })
            .catch(showError);*/
    }
    angular.module('app')
        .controller('AllActivitiesController', ['dataService', 'notifier', '$location', 'activities', AllActivitiesController]);
}());