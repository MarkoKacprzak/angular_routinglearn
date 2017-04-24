(function () {

    angular.module('app')
        .controller('HomeController', ['dataService', 'notifier', HomeController]);

    function HomeController(dataService, notifier) {

        var vm = this;

        vm.message = 'Welcome to School Buddy!';
        vm.allSchools = {};
        vm.schoolCount = 0;
        vm.allClassrooms = {};
        vm.classroomCount = 0;
        vm.allActivities = {};
        vm.activityCount = 0;

        function showError(message) {
            notifier.error(message);
        }
        
        dataService.getAllSchools()
            .then(function(schools) {
                vm.allSchools = schools;
                vm.schoolCount = schools.length;
            })
            .catch(showError);

        dataService.getAllClassrooms()
            .then(function(classrooms) {
                vm.allClassrooms = classrooms;
                vm.classroomCount = classrooms.length;
            })
            .catch(showError);

        dataService.getAllActivities()
            .then(function(activities) {
                vm.allActivities = activities;
                vm.activityCount = activities.length;
            })
            .catch(showError);
    }

}());