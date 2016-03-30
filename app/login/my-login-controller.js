(function () {

    "use strict";

    var MyLoginModule = angular.module("MyLoginModule", ["MyAuthModule"]);

    MyLoginModule.controller("myLoginController", ["$rootScope", "$state", "$scope", "myAuthService", function ($rootScope, $state, $scope, myAuthService) {

        $scope.submit = function () {

            $rootScope.isLoggedIn = false;

            myAuthService.login({
                email: $scope.email,
                password: $scope.password
            }).then(function (response) {
                $state.go("dashboard");
            }, function (response) {
                console.log(response);
            });
        };

    }]);

})();