(function () {

    "use strict";

    var MyEmailModule = angular.module("MyEmailModule");

    MyEmailModule.controller("myEmailController", ["$scope", function ($scope) {


        console.log("myEmailController");

        angular.extend($scope, {

            //..

        });

    }]);

})();