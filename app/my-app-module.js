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