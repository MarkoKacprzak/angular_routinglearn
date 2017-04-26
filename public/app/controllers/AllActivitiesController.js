/*global angular*/
(function () {
    "use strict";
    function AllActivitiesController(dataService, notifier, $state, activities, $log) {
        var vm = this;
        vm.selectedMonth = 1; // default to January
        /*
        vm.search = function () {
            var classroom_detail_url = '/classrooms/' + vm.selectedClassroom.id + '/detail/' + vm.selectedMonth;
            $location.url(classroom_detail_url);
        }*/
        vm.allClassrooms = {};
        vm.selectedClassroom = {};
        vm.allActivities = activities;

        $log.debug($state.current.data);
        $log.debug($state.current.foo);

        vm.search = function () {
            $state.go('classroom_parent.classroom_detail', {id: vm.selectedClassroom.id, month: vm.selectedMonth});
        };

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
        .controller('AllActivitiesController', ['dataService', 'notifier', '$state', 'activities', '$log', AllActivitiesController]);
}());