(function () {

    "use strict";

    var MyLogoutModule = angular.module("MyLogoutModule", ["MyAuthModule"]);

    MyLogoutModule.controller("myLogoutController", ["$state", "$rootScope", "myAuthService", function ($state, $rootScope, myAuthService) {

        myAuthService.logout().then(function () {
            $rootScope.isLoggedIn = false;
            $state.go("login");
        });

    }]);

})();