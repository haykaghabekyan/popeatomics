(function () {

    "use strict";

    var MyLocationsModule = angular.module("MyLocationsModule");

    MyLocationsModule.controller("myLocationsController", ["$scope", "myUsersService", function ($scope, myUsersService) {

        angular.extend($scope, {
            users: []
        });

        myUsersService.getUsers().then(function (response) {
            $scope.users = response.data;
        }, function (error) {
            console.log(error);
        });

    }]);

})();