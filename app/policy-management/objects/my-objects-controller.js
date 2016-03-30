(function () {

    "use strict";

    var MyObjectsModule = angular.module("MyObjectsModule");

    MyObjectsModule.controller("myObjectsController", ["$scope", "myUsersService", "myNetworksService", function ($scope, myUsersService, myNetworksService) {

        angular.extend($scope, {
            users: [],
            networks: []
        });

        myUsersService.getUsers().then(function (response) {
            $scope.users = response.data;
        }, function (error) {
            console.log(error);
        });

        myNetworksService.getNetworks().then(function (response) {
            $scope.networks = response.data;
        }, function (error) {
            console.log(error);
        });

    }]);

})();