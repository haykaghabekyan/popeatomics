(function () {

    "use strict";

    var MyConfigurationModule = angular.module("MyConfigurationModule");

    MyConfigurationModule.controller("myConfigurationController", ["$scope", "$window", function ($scope, $window) {


        console.log("myConfigurationController");

        angular.extend($scope, {

            //..

        });

    }]);

})();