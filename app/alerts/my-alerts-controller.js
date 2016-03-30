(function () {

    "use strict";

    var MyAlertsModule = angular.module("MyAlertsModule");

    MyAlertsModule.controller("myAlertsController", ["$scope", "$window", function ($scope, $window) {


        console.log("myAlertsController");

        angular.extend($scope, {

        });

    }]);

})();