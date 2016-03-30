(function () {
    "use strict";

    var MyFiltersModule = angular.module("MyFiltersModule", []);

    MyFiltersModule.filter('groupBy', function () {

        var result = {};

        return function (collection, property) {
            angular.forEach(collection, function (value, key) {

                if (!result[value[property]]) {
                    result[value[property]] = [];
                }

                result[value[property]].push(value);
            });
            return result;
        };
    });
})();