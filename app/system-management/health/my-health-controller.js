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