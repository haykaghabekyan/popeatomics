(function () {
    "use strict";

    var MyAppModule = angular.module("MyAppModule", [
        "ui.router",
        "ui.bootstrap",
        "MyAuthModule",
        "MyLoginModule",
        "MyLogoutModule",
        "MyDashboardModule",
        "MyAlertsModule",
        "MyForensicsModule",
        "MyConfigurationModule",
        "MyPolicyManagementModule",
        "MySystemManagementModule"
    ]);

    MyAppModule.config([
        "$stateProvider",
        "$urlRouterProvider",
        "$locationProvider",
        function($stateProvider, $urlRouterProvider, $locationProvider) {

        $stateProvider
            .state("dashboard", {
                url: "/",
                controller: "myDashboardController",
                templateUrl: "app/dashboard/my-dashboard-tpl.html"
            })
            .state("alerts", {
                url: "/alerts",
                controller: "myAlertsController",
                templateUrl: "app/alerts/my-alerts-tpl.html"
            })
            .state("forensics", {
                url: "/forensics",
                controller: "myForensicsController",
                templateUrl: "app/forensics/my-forensics-tpl.html"
            })
            .state("policy-management", {
                url: "/policy-management",
                controller: "myPolicyManagementController",
                templateUrl: "app/policy-management/my-policy-management-tpl.html"
            })
            .state("policy-management.objects", {
                url: "/objects",
                controller: "myObjectsController",
                templateUrl: "app/policy-management/objects/my-objects-tpl.html"
            })
            .state("policy-management.networks", {
                url: "/networks",
                controller: "myNetworksController",
                templateUrl: "app/policy-management/networks/my-networks-tpl.html"
            })
            .state("policy-management.users", {
                url: "/users",
                controller: "myUsersController",
                templateUrl: "app/policy-management/users/my-users-tpl.html"
            })
            .state("policy-management.locations", {
                url: "/locations",
                controller: "myLocationsController",
                templateUrl: "app/policy-management/locations/my-locations-tpl.html"
            })
            .state("system-management", {
                url: "/system-management",
                controller: "mySystemManagementController",
                templateUrl: "app/system-management/my-system-management-tpl.html"
            })
            .state("system-management.health", {
                url: "/health",
                controller: "myHealthController",
                templateUrl: "app/system-management/health/my-health-tpl.html"
            })
            .state("system-management.upgrade", {
                url: "/upgrade",
                controller: "myUpgradeController",
                templateUrl: "app/system-management/upgrade/my-upgrade-tpl.html"
            })
            .state("configuration", {
                url: "/configuration",
                controller: "myConfigurationController",
                templateUrl: "app/configuration/my-configuration-tpl.html"
            })
            .state("configuration.activeConfiguration", {
                url: "/active-direction",
                controller: "myActiveDirectionController",
                templateUrl: "app/configuration/active-direction/my-active-direction-tpl.html"
            })
            .state("configuration.snmp", {
                url: "/snmp",
                controller: "mySNMPController",
                templateUrl: "app/configuration/snmp/my-snmp-tpl.html"
            })
            .state("configuration.syslog", {
                url: "/syslog",
                controller: "mySyslogController",
                templateUrl: "app/configuration/syslog/my-syslog-tpl.html"
            })
            .state("configuration.user", {
                url: "/user",
                controller: "myUserController",
                templateUrl: "app/configuration/user/my-user-tpl.html"
            })
            .state("configuration.email", {
                url: "/email",
                controller: "myEmailController",
                templateUrl: "app/configuration/email/my-email-tpl.html"
            })
            .state("login", {
                url: "/login",
                controller: "myLoginController",
                templateUrl: "app/login/my-login-tpl.html"
            })
            .state("logout", {
                url: "/logout",
                controller: "myLogoutController"
            });

        $urlRouterProvider.otherwise("/");

        //$locationProvider.html5Mode(true);

    }]).run(["$rootScope", "$window", "$state", "myAuthService", function ($rootScope, $window, $state, myAuthService) {
        //

        $rootScope.$on("$stateChangeStart", function (event, toState, toParams, fromState, fromParams) {

            $rootScope.isLoggedIn = myAuthService.isLoggedIn();

            if (toState.name !== "login" && !$rootScope.isLoggedIn) {
                event.preventDefault();
                $state.go('login'); // go to login
            }

        });

    }]);


})();
(function () {
    "use strict";

    var MyDashboardModule = angular.module("MyDashboardModule", ["MyChartsModule"]);

})();
(function () {
    "use strict";

    var MyConfigurationModule = angular.module("MyConfigurationModule", [
        "MyActiveDirectionModule",
        "MySNMPModule",
        "MySyslogModule",
        "MyUserModule",
        "MyEmailModule"
    ]);

})();
(function () {
    "use strict";

    var MyAlertshModule = angular.module("MyAlertsModule", []);

})();
(function () {
    "use strict";

    var MyAuthModule = angular.module("MyAuthModule", []);

})();
(function () {
    "use strict";

    var MyPolicyManagementModule = angular.module("MyPolicyManagementModule", [
        "MyUsersModule",
        "MyObjectsModule",
        "MyLocationsModule",
        "MyNetworksModule"
    ]);

})();
(function () {

    "use strict";

    var MyForensicsModule = angular.module("MyForensicsModule", []);

})();
(function () {
    "use strict";

    var MyLoginModule = angular.module("MyLoginModule", []);

})();
(function () {
    "use strict";

    var MySystemManagementModule = angular.module("MySystemManagementModule", ["MyHealthModule", "MyUpgradeModule"]);

})();
(function () {
    "use strict";

    var MyLogoutModule = angular.module("MyLogoutModule", []);

})();
(function () {
    "use strict";

    var MyActiveDirectionModule = angular.module("MyActiveDirectionModule", []);

})();
(function () {
    "use strict";

    var MySNMPModule = angular.module("MySNMPModule", []);

})();
(function () {
    "use strict";

    var MymailModule = angular.module("MyEmailModule", []);

})();
(function () {
    "use strict";

    var MySyslogModule = angular.module("MySyslogModule", []);

})();
(function () {
    "use strict";

    var MyUserModule = angular.module("MyUserModule", []);

})();
(function () {

    "use strict";

    var MyLocationsModule = angular.module("MyLocationsModule", ["angular.filter"]);

})();
(function () {

    "use strict";

    var MyObjectsModule = angular.module("MyObjectsModule", ["angular.filter"]);

})();
(function () {

    "use strict";

    var MyNetworksModule = angular.module("MyNetworksModule", ["angular.filter"]);

})();
(function () {

    "use strict";

    var MyUpgradeModule = angular.module("MyUpgradeModule", []);

})();
(function () {
    "use strict";

    var MyUsersModule = angular.module("MyUsersModule", []);

})();
(function () {

    "use strict";

    var MyHealthModule = angular.module("MyHealthModule", ["MyChartsModule"]);

})();
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
(function () {
    "use strict";

    var MyChartsModule = angular.module("MyChartsModule", []);

})();
(function () {
    "use strict";

    var MyAppModule = angular.module("MyAppModule");

    MyAppModule.controller("myAppController", ["$scope", "myAuthService", function($scope, myAuthService) {

        //..

        $scope.toggleSidebar = false;

    }]);


})();
(function () {

    "use strict";

    var MyDashboardModule = angular.module("MyDashboardModule");

    MyDashboardModule.controller("myDashboardController", ["$scope", function ($scope) {

        angular.extend($scope, {

            twoMonthsAvg: 'today',
            alerts: 'day',
            topHosts: 'day',
            topHostsAcknowledged: false,

            threatLevelGauge: {
                "id": "threatLevelGauge",
                name: "",
                titles: [{
                    "size": 15,
                    "text": "Low"
                }],
                "axes": [ {
                    "bandOutlineThickness": 8,
                    "labelFrequency": "",
                    "axisThickness": 1,
                    "axisAlpha": 0,
                    "tickAlpha": 0,
                    "bands": [{
                        "color": "#00cc00",
                        "startValue": 0,
                        "endValue": 70
                    }, {
                        "color": "#e62e00",
                        "startValue": 70,
                        "endValue": 100
                    }],
                    "bottomText": "",
                    "endValue": 100
                } ],
                "arrows": [{
                    //color: "#222d32",
                    "value": 20
                }],
                movementSize: 20,
                bottomText: {
                    enabled: false
                },
                measurementUnit: ""
            },
            dailyMonitoredTraffic: {
                id: "dailyMonitoredTraffic",
                "axes": [ {
                    "bandOutlineAlpha": 1,
                    "bandOutlineThickness": 8,
                    "labelFrequency": "",
                    "axisThickness": 1,
                    "axisAlpha": 0,
                    "tickAlpha": 0,
                    "bands": [{
                        "color": "#84b761",
                        "endValue": 100,
                        "startValue": 0
                    }]
                } ],
                "type": "serial",
                "categoryField": "date",
                "dataDateFormat": "YYYY-MM-DD HH:NN",
                "categoryAxis": {
                    "autoRotateCount": 0,
                    "minPeriod": "mm",
                    "parseDates": true,
                    "minHorizontalGap": 83,
                    "tickLength": 0,
                    "title": ""
                },
                "chartCursor": {
                    "enabled": true,
                    "categoryBalloonDateFormat": "JJ:NN"
                },
                "legend": {
                    "enabled": true,
                    "useGraphSettings": true
                },
                "trendLines": [],
                "graphs": [{
                    "bullet": "none",
                    "id": "AmGraph-1",
                    "title": "Total",
                    "valueField": "column-1",
                    "lineColor": "#e60000"
                }, {
                    "bullet": "none",
                    "id": "AmGraph-2",
                    "title": "DNS",
                    "valueField": "column-2",
                    "lineColor": "#002b80"
                }, {
                    "bullet": "none",
                    "id": "AmGraph-3",
                    "title": "HTTP",
                    "valueField": "column-3",
                    "lineColor": "#4d4dff"
                }, {
                    "bullet": "none",
                    "id": "AmGraph-4",
                    "title": "IMAP",
                    "valueField": "column-4",
                    "lineColor": "#1aff8c"
                }, {
                    "bullet": "none",
                    "id": "AmGraph-5",
                    "title": "IP",
                    "valueField": "column-5",
                    "lineColor": "#808000"
                }, {
                    "bullet": "none",
                    "id": "AmGraph-6",
                    "title": "POP",
                    "valueField": "column-6",
                    "lineColor": "#9966ff"
                }, {
                    "bullet": "none",
                    "id": "AmGraph-7",
                    "title": "SMB",
                    "valueField": "column-7",
                    "lineColor": "#0066ff"
                }, {
                    "bullet": "none",
                    "id": "AmGraph-8",
                    "title": "SMTP",
                    "valueField": "column-8",
                    "lineColor": "#99c2ff"
                }, {
                    "bullet": "none",
                    "id": "AmGraph-9",
                    "title": "SSH",
                    "valueField": "column-9",
                    "lineColor": "#262626"
                }, {
                    "bullet": "none",
                    "id": "AmGraph-10",
                    "title": "TCP",
                    "valueField": "column-10",
                    "lineColor": "#484848"
                }, {
                    "bullet": "none",
                    "id": "AmGraph-11",
                    "title": "UDB",
                    "valueField": "column-11",
                    "lineColor": "#331a00"
                }, {
                    "bullet": "none",
                    "id": "AmGraph-12",
                    "title": "Logs",
                    "valueField": "column-12",
                    "lineColor": "#4dc3ff"
                }],
                "guides": [],
                "valueAxes": [{
                    "title": "Mbps"
                }],
                "allLabels": [],
                "balloon": {},
                "dataProvider": [{
                    "column-1": 50,
                    "column-2": 25,
                    "column-3": 40,
                    "column-4": 50,
                    "column-5": 25,
                    "column-6": 40,
                    "column-7": 40,
                    "column-8": 50,
                    "column-9": 25,
                    "column-10": 40,
                    "column-11": 40,
                    "column-12": 40,
                    "date": "2014-03-01 07:57"
                }, {
                    "column-1": 57,
                    "column-2": 30,
                    "column-3": 40,
                    "column-4": 50,
                    "column-5": 25,
                    "column-6": 40,
                    "column-7": 40,
                    "column-8": 50,
                    "column-9": 25,
                    "column-10": 40,
                    "column-11": 40,
                    "column-12": 40,
                    "date": "2014-03-01 07:58"
                }, {
                    "column-1": 40,
                    "column-2": 60,
                    "column-3": 44,
                    "column-4": 50,
                    "column-5": 25,
                    "column-6": 40,
                    "column-7": 40,
                    "column-8": 50,
                    "column-9": 25,
                    "column-10": 40,
                    "column-11": 40,
                    "column-12": 40,
                    "date": "2014-03-01 07:59"
                }, {
                    "column-1": 100,
                    "column-2": 60,
                    "column-3": 42,
                    "column-4": 50,
                    "column-5": 25,
                    "column-6": 40,
                    "column-7": 43,
                    "column-8": 50,
                    "column-9": 25,
                    "column-10": 40,
                    "column-11": 9,
                    "column-12": 40,
                    "date": "2014-03-01 08:00"
                }, {
                    "column-1": 95,
                    "column-2": 67,
                    "column-3": 48,
                    "column-4": 50,
                    "column-5": 25,
                    "column-6": 40,
                    "column-7": 38,
                    "column-8": 50,
                    "column-9": 25,
                    "column-10": 40,
                    "column-11": 40,
                    "column-12": 10,
                    "date": "2014-03-01 08:01"
                }, {
                    "column-1": 120,
                    "column-2": 63,
                    "column-3": 40,
                    "column-4": 50,
                    "column-5": 25,
                    "column-6": 40,
                    "column-7": 100,
                    "column-8": 50,
                    "column-9": 25,
                    "column-10": 40,
                    "column-11": 40,
                    "column-12": 40,
                    "date": "2014-03-01 08:02"
                }, {
                    "column-1": 123,
                    "column-2": 65,
                    "column-3": 40,
                    "column-4": 50,
                    "column-5": 25,
                    "column-6": 40,
                    "column-7": 40,
                    "column-8": 50,
                    "column-9": 25,
                    "column-10": 40,
                    "column-11": 49,
                    "column-12": 40,
                    "date": "2014-03-01 08:03"
                }],
                "arrows": [{

                }]
            },
            utilizationSummaryChart: {
                "id" : "utilizationSummaryChart",
                "dataDateFormat": "YYYY-MM-DD HH:NN",
                "chartCursor": {
                    "enabled": true,
                    "categoryBalloonDateFormat": "JJ:NN"
                },
                "legend": {
                    "enabled": true,
                    "useGraphSettings": true
                },
                "graphs": [{
                    "bullet": "none",
                    "valueField": "column1",
                    "title": "Head"
                }, {
                    "bullet": "none",
                    "valueField": "column2",
                    "title": "Analytics"
                }, {
                    "bullet": "none",
                    "valueField": "column3",
                    "title": "Network Packet sensor (Chicago 10.100.0.1)"
                }, {
                    "bullet": "none",
                    "valueField": "column4",
                    "title": "Network Packet sensor (New York 10.200.0.1)"
                }, {
                    "bullet": "none",
                    "valueField": "column5",
                    "title": "Log Sensor (Chicago 10.100.0.2)"
                }, {
                    "bullet": "none",
                    "valueField": "column6",
                    "title": "VMware Sensor (Los Angeles (10.300.0.1)"
                }],
                "dataProvider": [{
                    "date": "2012-01-01 08:03",
                    "column1": 8,
                    "column2": 5,
                    "column3": 3,
                    "column4": 8,
                    "column5": 7,
                    "column6": 8.7
                }, {
                    "date": "2012-01-01 09:03",
                    "column1": 8,
                    "column2": 8,
                    "column3": 8,
                    "column4": 8,
                    "column5": 8,
                    "column6": 8
                }, {
                    "date": "2012-01-01 10:03",
                    "column1": 9,
                    "column2": 8,
                    "column3": 6,
                    "column4": 5,
                    "column5": 7,
                    "column6": 8
                }, {
                    "date": "2012-01-01 11:03",
                    "column1": 8,
                    "column2": 6,
                    "column3": 5,
                    "column4": 8,
                    "column5": 7,
                    "column6": 8
                }, {
                    "date": "2012-01-01 12:03",
                    "column1": 6,
                    "column2": 8,
                    "column3": 3,
                    "column4": 8,
                    "column5": 5,
                    "column6": 8
                }],
                "valueAxes": [{
                    "includeGuidesInMinMax": true,
                    "labelFunction": function (value) {
                        if (value === 25) {
                            return 'Critically high';
                        } else if (value === 20) {
                            return 'High utilization';
                        }

                        return value;
                    }
                }],
                "guides": [{
                    "value": 25,
                    "toValue": 25,
                    "lineColor": "#CC0000",
                    "fillAlpha": 1,
                    "fillColor": "#CC0000"
                }, {
                    "value": 20,
                    "toValue": 20,
                    "lineColor": "#CCF000",
                    "fillAlpha": 1,
                    "fillColor": "#CCF000"
                }],
                "categoryField": "date",
                "categoryAxis": {
                    "parseDates": true,
                    "minPeriod": "mm",
                    "axisAlpha": 0,
                    "gridAlpha": 0.1
                }
            },
            networkTraffic: {
                "id" : "networkTraffic",
                "dataDateFormat": "YYYY-MM-DD HH:NN",
                "chartCursor": {
                    "enabled": true,
                    "categoryBalloonDateFormat": "JJ:NN"
                },
                "legend": {
                    "enabled": true,
                    "useGraphSettings": true
                },
                "graphs": [{
                    "bullet": "none",
                    "valueField": "column1",
                    "fillAlphas": 0.7,
                    "title": "Packet Sensor (Chicago)"
                }, {
                    "bullet": "none",
                    "valueField": "column2",
                    "fillAlphas": 0.7,
                    "title": "Packet Sensor (Los Angeles)"
                }, {
                    "bullet": "none",
                    "valueField": "column3",
                    "fillAlphas": 0.7,
                    "title": "VMware Sensor (Los Angeles)"
                }],
                "dataProvider": [{
                    "date": "2012-01-01",
                    "column1": 8,
                    "column2": 8,
                    "column3": 8
                }, {
                    "date": "2012-01-02",
                    "column1": 10,
                    "column2": 11,
                    "column3": 9
                }, {
                    "date": "2012-01-03",
                    "column1": 11,
                    "column2": 11,
                    "column3": 9
                }, {
                    "date": "2012-01-04",
                    "column1": 8,
                    "column2": 10,
                    "column3": 9
                }, {
                    "date": "2012-01-05",
                    "column1": 10,
                    "column2": 11,
                    "column3": 9
                }],
                "valueAxes": [{
                    "title": "Mbps",
                    "includeGuidesInMinMax": true,
                    "labelFunction": function (value) {
                        if (value === 25) {
                            return 'Critically high';
                        } else if (value === 20) {
                            return 'High utilization';
                        }

                        return value;
                    }
                }],
                "guides": [{
                    "value": 25,
                    "toValue": 25,
                    "lineColor": "#CC0000",
                    "fillAlpha": 1,
                    "fillColor": "#CC0000"
                }, {
                    "value": 20,
                    "toValue": 20,
                    "lineColor": "#CCF000",
                    "fillAlpha": 1,
                    "fillColor": "#CCF000"
                }],
                "categoryField": "date",
                "categoryAxis": {
                    "parseDates": true,
                    "axisAlpha": 0,
                    "gridAlpha": 0.1
                }
            },
            totalLgEvents: {
                "id" : "totalLgEvents",
                "dataDateFormat": "YYYY-MM-DD HH:NN",
                "chartCursor": {
                    "enabled": true,
                    "categoryBalloonDateFormat": "JJ:NN"
                },
                "legend": {
                    "enabled": true,
                    "useGraphSettings": true
                },
                "graphs": [{
                    "bullet": "none",
                    "valueField": "value",
                    "fillAlphas": 0.7,
                    "title": "Log Sensor (Chicago)"
                }],
                "dataProvider": [{
                    "date": "2012-01-01",
                    "value": 2
                }, {
                    "date": "2012-01-02",
                    "value": 1
                }, {
                    "date": "2012-01-03",
                    "value": 2
                }, {
                    "date": "2012-01-04",
                    "value": 2.3
                }, {
                    "date": "2012-01-05",
                    "value": 1
                }],
                "valueAxes": [{
                    "title": "Events Per Second",
                    "includeGuidesInMinMax": true,
                    "labelFunction": function (value) {
                        if (value === 25) {
                            return 'Critically high';
                        } else if (value === 20) {
                            return 'High utilization';
                        }

                        return value;
                    }
                }],
                "guides": [{
                    "value": 25,
                    "toValue": 25,
                    "lineColor": "#CC0000",
                    "fillAlpha": 1,
                    "fillColor": "#CC0000"
                }, {
                    "value": 20,
                    "toValue": 20,
                    "lineColor": "#CCF000",
                    "fillAlpha": 1,
                    "fillColor": "#CCF000"
                }],
                "categoryField": "date",
                "categoryAxis": {
                    "parseDates": true,
                    "axisAlpha": 0,
                    "gridAlpha": 0.1
                }
            }

        });

    }]);

})();
(function () {

    "use strict";

    var MyConfigurationModule = angular.module("MyConfigurationModule");

    MyConfigurationModule.controller("myConfigurationController", ["$scope", "$window", function ($scope, $window) {


        console.log("myConfigurationController");

        angular.extend($scope, {

            //..

        });

    }]);

})();
(function () {

    "use strict";

    var MyAlertsModule = angular.module("MyAlertsModule");

    MyAlertsModule.controller("myAlertsController", ["$scope", "$window", function ($scope, $window) {


        console.log("myAlertsController");

        angular.extend($scope, {

        });

    }]);

})();
(function () {

    "use strict";

    var MyPolicyManagementModule = angular.module("MyPolicyManagementModule");

    MyPolicyManagementModule.controller("myPolicyManagementController", ["$scope", function ($scope) {

        //..

    }]);

})();
(function () {

    "use strict";

    var MyForensicsModule = angular.module("MyForensicsModule");

    MyForensicsModule.controller("myForensicsController", ["$scope", function ($scope) {


        console.log("myForensicsController");

        angular.extend($scope, {

            //..

        });

    }]);

})();
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
(function () {

    "use strict";

    var MySystemManagementModule = angular.module("MySystemManagementModule");

    MySystemManagementModule.controller("mySystemManagementController", ["$scope", "$filter", function ($scope, $filter) {

        angular.extend($scope, {

            //..

        });

    }]);

})();
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
(function () {

    "use strict";

    var MyActiveDirectionModule = angular.module("MyActiveDirectionModule");

    MyActiveDirectionModule.controller("myActiveDirectionController", ["$scope", "$window", function ($scope, $window) {


        console.log("myConfigurationController");

        angular.extend($scope, {

            //..

        });

    }]);

})();
(function () {

    "use strict";

    var MySNMPModule = angular.module("MySNMPModule");

    MySNMPModule.controller("mySNMPController", ["$scope", "$window", function ($scope, $window) {


        console.log("mySNMPController");

        angular.extend($scope, {

            //..

        });

    }]);

})();
(function () {

    "use strict";

    var MyEmailModule = angular.module("MyEmailModule");

    MyEmailModule.controller("myEmailController", ["$scope", function ($scope) {


        console.log("myEmailController");

        angular.extend($scope, {

            //..

        });

    }]);

})();
(function () {

    "use strict";

    var MySyslogModule = angular.module("MySyslogModule");

    MySyslogModule.controller("mySyslogController", ["$scope", "$window", function ($scope, $window) {


        console.log("mySyslogController");

        angular.extend($scope, {

            //..

        });

    }]);

})();
(function () {

    "use strict";

    var MyUserModule = angular.module("MyUserModule");

    MyUserModule.controller("myUserController", ["$scope", "$window", function ($scope, $window) {


        console.log("myUserController");

        angular.extend($scope, {

            //..

            addUserGroup: function () {
                console.log("add user group");
            }

        });

    }]);

})();
(function () {

    "use strict";

    var MyLocationsModule = angular.module("MyLocationsModule");

    MyLocationsModule.controller("myLocationsController", ["$scope", "myUsersService", function ($scope, myUsersService) {

        angular.extend($scope, {
            users: []
        });

        myUsersService.getUsers().then(function (response) {
            $scope.users = response.data;
        }, function (error) {
            console.log(error);
        });

    }]);

})();
(function () {

    "use strict";

    var MyObjectsModule = angular.module("MyObjectsModule");

    MyObjectsModule.controller("myObjectsController", ["$scope", "myUsersService", "myNetworksService", function ($scope, myUsersService, myNetworksService) {

        angular.extend($scope, {
            users: [],
            networks: []
        });

        myUsersService.getUsers().then(function (response) {
            $scope.users = response.data;
        }, function (error) {
            console.log(error);
        });

        myNetworksService.getNetworks().then(function (response) {
            $scope.networks = response.data;
        }, function (error) {
            console.log(error);
        });

    }]);

})();
(function () {

    "use strict";

    var MyNetworksModule = angular.module("MyNetworksModule");

    MyNetworksModule.controller("myNetworksController", ["$scope", "myNetworksService", function ($scope, myNetworksService) {

        angular.extend($scope, {
            networks: []
        });

        myNetworksService.getNetworks().then(function (response) {
            $scope.networks = response.data;
        }, function (error) {
            console.log(error);
        });

    }]);

})();
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
(function () {

    "use strict";

    var MyHealthModule = angular.module("MyHealthModule");

    var gaugeData = function (options, data) {

        var defaults = {
            "axes": [{
                "axisThickness": 1,
                "axisAlpha": 0.2,
                "tickAlpha": 0.2,
                "valueInterval": data.valueInterval,
                "bands": data.bands,
                "bottomText": data.name,
                "bottomTextYOffset": 20,
                "endValue": data.endValue
            }],
            "arrows": [{

            }],
            "export": {
                "enabled": false
            },
            "allLabels": [],
            "balloon": {},
            "titles": []
        };

        angular.extend(defaults, options);

        return defaults;
    };

    MyHealthModule.controller("myHealthController", ["$scope", "$filter", "myHealthService", function ($scope, $filter, myHealthService) {

        angular.extend($scope, {

            guages: {
                headUnit: {
                    memoryProcess: gaugeData({
                        id: "headUnitMemoryProcess",
                        name: "Memory Process",
                        measurementUnit: 'Gb',
                        movementSize: 6
                    }, {
                        valueInterval: 6,
                        endValue: 96,
                        bands: [ {
                            "color": "#484848",
                            "endValue": 96,
                            "startValue": 0
                        }]
                    }),
                    cpu: gaugeData({
                        id: "headUnitMCpu",
                        name: "CPU",
                        measurementUnit: '%',
                        movementSize: 5
                    }, {
                        valueInterval: 5,
                        endValue: 100,
                        bands: [{
                            "color": "#84b761",
                            "endValue": 100,
                            "startValue": 0
                        }]
                    }),
                    memoryProcessMax: gaugeData({
                        id: "headUnitMemoryProcessMax",
                        name: "Memory Process Max",
                        measurementUnit: 'Tb',
                        movementSize: 0.8
                    }, {
                        valueInterval: 1,
                        endValue: 5,
                        bands: [ {
                            "color": "#A6B123",
                            "endValue": 5,
                            "startValue": 0
                        }]
                    })
                },
                analyzer: {
                    memoryProcess: gaugeData({
                        id: "analyzerHeadUnitMemoryProcess",
                        name: "Memory Process",
                        measurementUnit: 'Gb',
                        movementSize: 6
                    }, {
                        valueInterval: 6,
                        endValue: 96,
                        bands: [ {
                            "color": "#484848",
                            "endValue": 96,
                            "startValue": 0
                        }]
                    }),
                    cpu: gaugeData({
                        id: "analyzerHeadUnitMCpu",
                        name: "CPU",
                        measurementUnit: '%',
                        movementSize: 5
                    }, {
                        valueInterval: 5,
                        endValue: 100,
                        bands: [{
                            "color": "#84b761",
                            "endValue": 100,
                            "startValue": 0
                        }]
                    }),
                    memoryProcessMax: gaugeData({
                        id: "analyzerHeadUnitMemoryProcessMax",
                        name: "Memory Process Max",
                        measurementUnit: 'Tb',
                        movementSize: 0.8
                    }, {
                        valueInterval: 1,
                        endValue: 5,
                        bands: [ {
                            "color": "#A6B123",
                            "endValue": 5,
                            "startValue": 0
                        }]
                    })
                },
                sensor: {
                    memoryProcess: gaugeData({
                        id: "sensorHeadUnitMemoryProcess",
                        name: "Memory Process",
                        measurementUnit: 'Gb',
                        movementSize: 6
                    }, {
                        valueInterval: 6,
                        endValue: 96,
                        bands: [ {
                            "color": "#484848",
                            "endValue": 96,
                            "startValue": 0
                        }]
                    }),
                    cpu: gaugeData({
                        id: "sensorHeadUnitMCpu",
                        name: "CPU",
                        measurementUnit: '%',
                        movementSize: 5
                    }, {
                        valueInterval: 5,
                        endValue: 100,
                        bands: [{
                            "color": "#84b761",
                            "endValue": 100,
                            "startValue": 0
                        }]
                    }),
                    memoryProcessMax: gaugeData({
                        id: "sensorHeadUnitMemoryProcessMax",
                        name: "Memory Process Max",
                        measurementUnit: 'Tb',
                        movementSize: 0.8
                    }, {
                        valueInterval: 1,
                        endValue: 5,
                        bands: [ {
                            "color": "#A6B123",
                            "endValue": 5,
                            "startValue": 0
                        }]
                    })
                }
            }

        });

    }]);

})();
(function () {
    "use strict";

    var MyChartsModule = angular.module("MyChartsModule");
    
    var chart;
    var chartData;

    MyChartsModule.directive("myGaugeChart", function() {
        return {
            restrict: 'A',
            templateUrl: 'app/shared/directives/charts/my-gauge-chart-tpl.html',
            scope: {
                chartData: "=chartData"
            },
            link: function (scope, element, attrs) {

                chartData = scope.chartData;

                var id = chartData.id;

                element.append("<div id='" + id + "'></div>");

                angular.extend(chartData, {
                    "type": "gauge",
                    "theme": "light"
                });

                chart = AmCharts.makeChart(id, chartData);

            },
            controller: ["$scope", function ($scope) {

                //..

            }]
        };
    });

})();
(function () {
    "use strict";

    var MyChartsModule = angular.module("MyChartsModule");

    var chart;
    var chartData;

    MyChartsModule.directive("myLineChart", function() {
        return {
            restrict: 'A',
            templateUrl: 'app/shared/directives/charts/my-line-chart-tpl.html',
            scope: {
                chartData: "=chartData"
            },
            link: function (scope, element, attrs) {

                chartData = scope.chartData;

                var id = chartData.id;

                element.append("<div id='" + id + "'></div>");

                angular.extend(chartData, {
                    "type": "serial",
                    "theme": "light",
                    "pathToImages": "assets/libs/amcharts/3/images/"
                });

                chart = AmCharts.makeChart(id, chartData);
            }
        };
    });

})();
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
(function () {

    "use strict";

    var MyNetworksModule = angular.module('MyNetworksModule');

    MyNetworksModule.factory('myNetworksService', ["$http", function ($http) {
        return {
            getNetworks: function () {
                return $http({
                    method: "GET",
                    url: 'api/networks.json'
                });
            }
        };
    }]);
})();
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