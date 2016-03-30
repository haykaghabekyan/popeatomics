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