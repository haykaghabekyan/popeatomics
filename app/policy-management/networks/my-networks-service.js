(function () {

    "use strict";

    var MyNetworksModule = angular.module('MyNetworksModule');

    MyNetworksModule.factory('myNetworksService', ["$http", function ($http) {
        return {
            getNetworks: function () {
                return $http({
                    method: "GET",
                    url: 'api/networks.json'
                });
            }
        };
    }]);
})();