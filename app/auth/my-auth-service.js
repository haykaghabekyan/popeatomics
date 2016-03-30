(function () {

    "use strict";

    var MyAuthModule = angular.module('MyAuthModule');

    MyAuthModule.factory('myAuthService', ["$q", "$window", function ($q, $window) {

        return {
            login : function(user) {
                return $q(function(resolve, reject) {
                    if (user.email === "hayk@gmail.com" && user.password === "vayquara") {
                        var u = {
                            email: user.email,
                            token: ""
                        };

                        $window.sessionStorage.setItem("currentUser", JSON.stringify(u));

                        resolve(u);
                    } else {
                        reject('No user credentials given');
                    }
                });
            },
            logout: function () {
                return $q(function(resolve, reject) {
                    $window.sessionStorage.removeItem("currentUser");
                    resolve();
                });
            },
            isLoggedIn: function () {
                var currentUser = $window.sessionStorage.getItem("currentUser");

                return currentUser ? JSON.parse(currentUser) : false;
            }
        };
    }]);
})();