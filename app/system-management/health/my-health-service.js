(function () {

    "use strict";

    var MyHealthModule = angular.module('MyHealthModule');

    MyHealthModule.factory('myHealthService', ["$q", function ($q) {

        return {
            get: function (movementSize) {
                return $q(function(resolve, reject) {
                    var value = Math.round( Math.random() * movementSize);
                    resolve(value);
                });
            }
        };
    }]);
})();