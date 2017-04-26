/*global angular*/
(function () {
    "use strict";
    function ClassroomController(dataService, notifier, $stateParams, classroom) {
        var vm = this;
        vm.month = $stateParams.month;
        vm.message = $stateParams.classroomMessage;
        vm.currentClassroom = classroom;
        if ($stateParams.month) {
            if (classroom.activities.length > 0) {
                vm.timePeriod = dataService.getMonthName($stateParams.month);
            } else {
                vm.timePeriod = 'No activities this month';
            }
        } else {
            vm.timePeriod = 'All activities';
        }
    }
    angular.module('app')
        .controller('ClassroomController', ['dataService', 'notifier', '$stateParams', 'classroom', ClassroomController]);
}());