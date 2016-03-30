(function () {

    "use strict";

    var MyUpgradeModule = angular.module("MyUpgradeModule");

    MyUpgradeModule.controller("myUpgradeController", ["$scope", "$filter", "myUpgradeService", function ($scope, $filter, myUpgradeService) {

        angular.extend($scope, {

            hosts: [],

            update: function (host) {
                host.updating = true;
                setInterval(function () {
                    $scope.$apply(function () {
                        host.updating = false;
                    });
                }, 20000);
            },
            addHost: function () {
                alert('add host');
            },
            removeHosts: function () {
                var hosts = [];

                $scope.hosts = $filter('filter')($scope.hosts, function (host) {
                    if (host.selected) {
                        hosts.push(host);
                        return false;
                    }
                    return true;
                });

                myUpgradeService.removeHosts(hosts);
            },
            checkAllHosts: function () {
                $scope.selectedAll = !$scope.selectedAll;

                angular.forEach($scope.hosts, function (host) {
                    host.selected = $scope.selectedAll;
                });
            }

        });

        myUpgradeService.getHosts().then(function (response) {
            $scope.hosts = response;
        }, function (response) {
            console.log(response);
        });

    }]);

})();