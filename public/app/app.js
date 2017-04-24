(function() {

    var app = angular.module('app', [ngRoute]);

    app.config(['$logProvider', function ($logProvider) {

        $logProvider.debugEnabled(true);

    }]);

}());