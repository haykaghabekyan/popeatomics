(function () {

    "use strict";

    var MyUsersModule = angular.module('MyUsersModule');

    MyUsersModule.factory('myUsersService', ["$http", function ($http) {

        return {
            getUsers: function () {
                return $http({
                    method: "GET",
                    url: 'api/users.json'
                });
            }
        };
    }]);
})();