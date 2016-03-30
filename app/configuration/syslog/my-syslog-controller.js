(function () {

    "use strict";

    var MySyslogModule = angular.module("MySyslogModule");

    MySyslogModule.controller("mySyslogController", ["$scope", "$window", function ($scope, $window) {


        console.log("mySyslogController");

        angular.extend($scope, {

            //..

        });

    }]);

})();