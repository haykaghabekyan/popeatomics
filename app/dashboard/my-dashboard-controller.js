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