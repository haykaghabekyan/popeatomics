(function () {

    "use strict";

    var MyUserModule = angular.module("MyUserModule");

    MyUserModule.controller("myUserController", ["$scope", "$window", function ($scope, $window) {


        console.log("myUserController");

        angular.extend($scope, {

            //..

            addUserGroup: function () {
                console.log("add user group");
            }

        });

    }]);

})();