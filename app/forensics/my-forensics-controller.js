(function () {

    "use strict";

    var MyForensicsModule = angular.module("MyForensicsModule");

    MyForensicsModule.controller("myForensicsController", ["$scope", function ($scope) {


        console.log("myForensicsController");

        angular.extend($scope, {

            //..

        });

    }]);

})();