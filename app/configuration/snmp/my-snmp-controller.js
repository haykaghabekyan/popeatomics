(function () {

    "use strict";

    var MySNMPModule = angular.module("MySNMPModule");

    MySNMPModule.controller("mySNMPController", ["$scope", "$window", function ($scope, $window) {


        console.log("mySNMPController");

        angular.extend($scope, {

            //..

        });

    }]);

})();