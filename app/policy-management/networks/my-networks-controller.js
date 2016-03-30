(function () {

    "use strict";

    var MyNetworksModule = angular.module("MyNetworksModule");

    MyNetworksModule.controller("myNetworksController", ["$scope", "myNetworksService", function ($scope, myNetworksService) {

        angular.extend($scope, {
            networks: []
        });

        myNetworksService.getNetworks().then(function (response) {
            $scope.networks = response.data;
        }, function (error) {
            console.log(error);
        });

    }]);

})();