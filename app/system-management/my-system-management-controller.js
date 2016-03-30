(function () {

    "use strict";

    var MySystemManagementModule = angular.module("MySystemManagementModule");

    MySystemManagementModule.controller("mySystemManagementController", ["$scope", "$filter", function ($scope, $filter) {

        angular.extend($scope, {

            //..

        });

    }]);

})();