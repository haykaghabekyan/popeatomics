(function () {

    "use strict";

    var MyObjectsModule = angular.module('MyObjectsModule');

    MyObjectsModule.factory('myObjectsService', ["$q", "$window", function ($q, $window) {

        return {
            getObjects: function () {

                return $q(function(resolve, reject) {
                    resolve([{
                        name: "10.0.0.1",
                        values: ["10.0.0.1"]
                    }, {
                        name: "172.16.0.255",
                        values: ["172.16.0.255"]
                    }, {
                        name: "192.168.0.0",
                        values: ["192.168.0.0"]
                    }, {
                        name: "Canada",
                        values: ["10.103.0.0"]
                    }, {
                        name: "CgoVDC - Qualys devices",
                        values: ["10.103.0.87", "10.103.0.91", "10.103.0.89"]
                    }]);
                });
            }
        };
    }]);
})();