(function () {

    "use strict";

    var MyUpgradeModule = angular.module('MyUpgradeModule');

    MyUpgradeModule.factory('myUpgradeService', ["$q", "$window", function ($q, $window) {

        return {
            getHosts: function () {
                return $q(function(resolve, reject) {
                    resolve([{
                        name: 'Head',
                        host: '10.0.0.1',
                        totalMemory: '94.56 GB',
                        cpu: '2%',
                        os: 'Linux 2.6.32-431.2',
                        uptime: '1 week 3 days 2h 23m',
                        selected: false,
                        updates: {
                            available: 0,
                            text: 'Up-to-Date'
                        }
                    }, {
                        name: 'Analyzer',
                        host: '10.0.0.2',
                        totalMemory: '94.56 GB',
                        cpu: '2%',
                        os: 'Linux 2.6.32-431.2',
                        uptime: '1 week 2 days 2h 2m',
                        selected: false,
                        updates: {
                            available: 0,
                            text: 'Up-to-Date'
                        }
                    }, {
                        name: 'Network Packet sensor',
                        host: '10.100.0.1',
                        totalMemory: '94.56 GB',
                        cpu: '',
                        os: 'Linux 2.6.32-431.2',
                        uptime: '3 week 1 days 14h 1m',
                        updates: {
                            available: 1,
                            text: ''
                        }
                    }, {
                        name: 'Network Packet sensor',
                        host: '10.200.0.1',
                        totalMemory: '94.56 GB',
                        cpu: '2.77%',
                        os: 'Linux 2.6.32-431.2',
                        uptime: '1 week 2 days 2h 2m',
                        updates: {
                            available: 0,
                            text: 'Up-to-Date'
                        }
                    }, {
                        name: 'Log sensor',
                        host: '10.100.0.2',
                        totalMemory: '94.56 GB',
                        cpu: '0.31%',
                        os: 'Linux 2.6.32-431.2',
                        uptime: '1 week 2 days 2h 2m',
                        updates: {
                            available: 0,
                            text: 'Up-to-Date'
                        }
                    }, {
                        name: 'VMware Sensor',
                        host: '10.300.0.1',
                        totalMemory: '94.56 GB',
                        cpu: '1.56%',
                        os: 'Linux 2.6.32-431.2',
                        uptime: '1 week 2 days 2h 2m',
                        updates: {
                            available: 0,
                            text: 'Up-to-Date'
                        }
                    }]);
                });
            },
            removeHosts: function (hosts) {
                //TODO
                console.log(hosts);
            }
        };
    }]);
})();