(function () {

    "use strict";

    var MyActiveDirectionModule = angular.module("MyActiveDirectionModule");

    MyActiveDirectionModule.controller("myActiveDirectionController", ["$scope", "$window", function ($scope, $window) {


        console.log("myConfigurationController");

        angular.extend($scope, {

            //..

        });

    }]);

})();