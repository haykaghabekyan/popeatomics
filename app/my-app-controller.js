(function () {
    "use strict";

    var MyAppModule = angular.module("MyAppModule");

    MyAppModule.controller("myAppController", ["$scope", "myAuthService", function($scope, myAuthService) {

        //..

        $scope.toggleSidebar = false;

    }]);


})();