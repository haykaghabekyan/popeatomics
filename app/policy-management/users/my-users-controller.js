(function () {

    "use strict";

    var MyUsersModule = angular.module("MyUsersModule");

    MyUsersModule.controller("myUsersController", ["$scope", "$filter", "myUsersService", function ($scope, $filter, myUsersService) {

        angular.extend($scope, {
            users: [],
            sort: {
                type: null,
                reverse: null
            },
            sortBy: function (type) {
                $scope.sort.type = type;
                $scope.sort.reverse = !$scope.sort.reverse;
            }
        });

        myUsersService.getUsers().then(function (response) {
            $scope.users = response.data;
        }, function (error) {
            console.log(error);
        });

    }]);

})();