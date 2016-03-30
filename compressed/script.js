!function(){"use strict";var e=angular.module("MyAppModule",["ui.router","ui.bootstrap","MyAuthModule","MyLoginModule","MyLogoutModule","MyDashboardModule","MyAlertsModule","MyForensicsModule","MyConfigurationModule","MyPolicyManagementModule","MySystemManagementModule"]);e.config(["$stateProvider","$urlRouterProvider","$locationProvider",function(e,o,l){e.state("dashboard",{url:"/",controller:"myDashboardController",templateUrl:"app/dashboard/my-dashboard-tpl.html"}).state("alerts",{url:"/alerts",controller:"myAlertsController",templateUrl:"app/alerts/my-alerts-tpl.html"}).state("forensics",{url:"/forensics",controller:"myForensicsController",templateUrl:"app/forensics/my-forensics-tpl.html"}).state("policy-management",{url:"/policy-management",controller:"myPolicyManagementController",templateUrl:"app/policy-management/my-policy-management-tpl.html"}).state("policy-management.objects",{url:"/objects",controller:"myObjectsController",templateUrl:"app/policy-management/objects/my-objects-tpl.html"}).state("policy-management.networks",{url:"/networks",controller:"myNetworksController",templateUrl:"app/policy-management/networks/my-networks-tpl.html"}).state("policy-management.users",{url:"/users",controller:"myUsersController",templateUrl:"app/policy-management/users/my-users-tpl.html"}).state("policy-management.locations",{url:"/locations",controller:"myLocationsController",templateUrl:"app/policy-management/locations/my-locations-tpl.html"}).state("system-management",{url:"/system-management",controller:"mySystemManagementController",templateUrl:"app/system-management/my-system-management-tpl.html"}).state("system-management.health",{url:"/health",controller:"myHealthController",templateUrl:"app/system-management/health/my-health-tpl.html"}).state("system-management.upgrade",{url:"/upgrade",controller:"myUpgradeController",templateUrl:"app/system-management/upgrade/my-upgrade-tpl.html"}).state("configuration",{url:"/configuration",controller:"myConfigurationController",templateUrl:"app/configuration/my-configuration-tpl.html"}).state("configuration.activeConfiguration",{url:"/active-direction",controller:"myActiveDirectionController",templateUrl:"app/configuration/active-direction/my-active-direction-tpl.html"}).state("configuration.snmp",{url:"/snmp",controller:"mySNMPController",templateUrl:"app/configuration/snmp/my-snmp-tpl.html"}).state("configuration.syslog",{url:"/syslog",controller:"mySyslogController",templateUrl:"app/configuration/syslog/my-syslog-tpl.html"}).state("configuration.user",{url:"/user",controller:"myUserController",templateUrl:"app/configuration/user/my-user-tpl.html"}).state("configuration.email",{url:"/email",controller:"myEmailController",templateUrl:"app/configuration/email/my-email-tpl.html"}).state("login",{url:"/login",controller:"myLoginController",templateUrl:"app/login/my-login-tpl.html"}).state("logout",{url:"/logout",controller:"myLogoutController"}),o.otherwise("/")}]).run(["$rootScope","$window","$state","myAuthService",function(e,o,l,t){e.$on("$stateChangeStart",function(o,n,a,r,u){e.isLoggedIn=t.isLoggedIn(),"login"===n.name||e.isLoggedIn||(o.preventDefault(),l.go("login"))})}])}(),function(){"use strict";angular.module("MyDashboardModule",["MyChartsModule"])}(),function(){"use strict";angular.module("MyConfigurationModule",["MyActiveDirectionModule","MySNMPModule","MySyslogModule","MyUserModule","MyEmailModule"])}(),function(){"use strict";angular.module("MyAlertsModule",[])}(),function(){"use strict";angular.module("MyAuthModule",[])}(),function(){"use strict";angular.module("MyPolicyManagementModule",["MyUsersModule","MyObjectsModule","MyLocationsModule","MyNetworksModule"])}(),function(){"use strict";angular.module("MyForensicsModule",[])}(),function(){"use strict";angular.module("MyLoginModule",[])}(),function(){"use strict";angular.module("MySystemManagementModule",["MyHealthModule","MyUpgradeModule"])}(),function(){"use strict";angular.module("MyLogoutModule",[])}(),function(){"use strict";angular.module("MyActiveDirectionModule",[])}(),function(){"use strict";angular.module("MySNMPModule",[])}(),function(){"use strict";angular.module("MyEmailModule",[])}(),function(){"use strict";angular.module("MySyslogModule",[])}(),function(){"use strict";angular.module("MyUserModule",[])}(),function(){"use strict";angular.module("MyLocationsModule",["angular.filter"])}(),function(){"use strict";angular.module("MyObjectsModule",["angular.filter"])}(),function(){"use strict";angular.module("MyNetworksModule",["angular.filter"])}(),function(){"use strict";angular.module("MyUpgradeModule",[])}(),function(){"use strict";angular.module("MyUsersModule",[])}(),function(){"use strict";angular.module("MyHealthModule",["MyChartsModule"])}(),function(){"use strict";var e=angular.module("MyFiltersModule",[]);e.filter("groupBy",function(){var e={};return function(o,l){return angular.forEach(o,function(o,t){e[o[l]]||(e[o[l]]=[]),e[o[l]].push(o)}),e}})}(),function(){"use strict";angular.module("MyChartsModule",[])}(),function(){"use strict";var e=angular.module("MyAppModule");e.controller("myAppController",["$scope","myAuthService",function(e,o){e.toggleSidebar=!1}])}(),function(){"use strict";var e=angular.module("MyDashboardModule");e.controller("myDashboardController",["$scope",function(e){angular.extend(e,{twoMonthsAvg:"today",alerts:"day",topHosts:"day",topHostsAcknowledged:!1,threatLevelGauge:{id:"threatLevelGauge",name:"",titles:[{size:15,text:"Low"}],axes:[{bandOutlineThickness:8,labelFrequency:"",axisThickness:1,axisAlpha:0,tickAlpha:0,bands:[{color:"#00cc00",startValue:0,endValue:70},{color:"#e62e00",startValue:70,endValue:100}],bottomText:"",endValue:100}],arrows:[{value:20}],movementSize:20,bottomText:{enabled:!1},measurementUnit:""},dailyMonitoredTraffic:{id:"dailyMonitoredTraffic",axes:[{bandOutlineAlpha:1,bandOutlineThickness:8,labelFrequency:"",axisThickness:1,axisAlpha:0,tickAlpha:0,bands:[{color:"#84b761",endValue:100,startValue:0}]}],type:"serial",categoryField:"date",dataDateFormat:"YYYY-MM-DD HH:NN",categoryAxis:{autoRotateCount:0,minPeriod:"mm",parseDates:!0,minHorizontalGap:83,tickLength:0,title:""},chartCursor:{enabled:!0,categoryBalloonDateFormat:"JJ:NN"},legend:{enabled:!0,useGraphSettings:!0},trendLines:[],graphs:[{bullet:"none",id:"AmGraph-1",title:"Total",valueField:"column-1",lineColor:"#e60000"},{bullet:"none",id:"AmGraph-2",title:"DNS",valueField:"column-2",lineColor:"#002b80"},{bullet:"none",id:"AmGraph-3",title:"HTTP",valueField:"column-3",lineColor:"#4d4dff"},{bullet:"none",id:"AmGraph-4",title:"IMAP",valueField:"column-4",lineColor:"#1aff8c"},{bullet:"none",id:"AmGraph-5",title:"IP",valueField:"column-5",lineColor:"#808000"},{bullet:"none",id:"AmGraph-6",title:"POP",valueField:"column-6",lineColor:"#9966ff"},{bullet:"none",id:"AmGraph-7",title:"SMB",valueField:"column-7",lineColor:"#0066ff"},{bullet:"none",id:"AmGraph-8",title:"SMTP",valueField:"column-8",lineColor:"#99c2ff"},{bullet:"none",id:"AmGraph-9",title:"SSH",valueField:"column-9",lineColor:"#262626"},{bullet:"none",id:"AmGraph-10",title:"TCP",valueField:"column-10",lineColor:"#484848"},{bullet:"none",id:"AmGraph-11",title:"UDB",valueField:"column-11",lineColor:"#331a00"},{bullet:"none",id:"AmGraph-12",title:"Logs",valueField:"column-12",lineColor:"#4dc3ff"}],guides:[],valueAxes:[{title:"Mbps"}],allLabels:[],balloon:{},dataProvider:[{"column-1":50,"column-2":25,"column-3":40,"column-4":50,"column-5":25,"column-6":40,"column-7":40,"column-8":50,"column-9":25,"column-10":40,"column-11":40,"column-12":40,date:"2014-03-01 07:57"},{"column-1":57,"column-2":30,"column-3":40,"column-4":50,"column-5":25,"column-6":40,"column-7":40,"column-8":50,"column-9":25,"column-10":40,"column-11":40,"column-12":40,date:"2014-03-01 07:58"},{"column-1":40,"column-2":60,"column-3":44,"column-4":50,"column-5":25,"column-6":40,"column-7":40,"column-8":50,"column-9":25,"column-10":40,"column-11":40,"column-12":40,date:"2014-03-01 07:59"},{"column-1":100,"column-2":60,"column-3":42,"column-4":50,"column-5":25,"column-6":40,"column-7":43,"column-8":50,"column-9":25,"column-10":40,"column-11":9,"column-12":40,date:"2014-03-01 08:00"},{"column-1":95,"column-2":67,"column-3":48,"column-4":50,"column-5":25,"column-6":40,"column-7":38,"column-8":50,"column-9":25,"column-10":40,"column-11":40,"column-12":10,date:"2014-03-01 08:01"},{"column-1":120,"column-2":63,"column-3":40,"column-4":50,"column-5":25,"column-6":40,"column-7":100,"column-8":50,"column-9":25,"column-10":40,"column-11":40,"column-12":40,date:"2014-03-01 08:02"},{"column-1":123,"column-2":65,"column-3":40,"column-4":50,"column-5":25,"column-6":40,"column-7":40,"column-8":50,"column-9":25,"column-10":40,"column-11":49,"column-12":40,date:"2014-03-01 08:03"}],arrows:[{}]},utilizationSummaryChart:{id:"utilizationSummaryChart",dataDateFormat:"YYYY-MM-DD HH:NN",chartCursor:{enabled:!0,categoryBalloonDateFormat:"JJ:NN"},legend:{enabled:!0,useGraphSettings:!0},graphs:[{bullet:"none",valueField:"column1",title:"Head"},{bullet:"none",valueField:"column2",title:"Analytics"},{bullet:"none",valueField:"column3",title:"Network Packet sensor (Chicago 10.100.0.1)"},{bullet:"none",valueField:"column4",title:"Network Packet sensor (New York 10.200.0.1)"},{bullet:"none",valueField:"column5",title:"Log Sensor (Chicago 10.100.0.2)"},{bullet:"none",valueField:"column6",title:"VMware Sensor (Los Angeles (10.300.0.1)"}],dataProvider:[{date:"2012-01-01 08:03",column1:8,column2:5,column3:3,column4:8,column5:7,column6:8.7},{date:"2012-01-01 09:03",column1:8,column2:8,column3:8,column4:8,column5:8,column6:8},{date:"2012-01-01 10:03",column1:9,column2:8,column3:6,column4:5,column5:7,column6:8},{date:"2012-01-01 11:03",column1:8,column2:6,column3:5,column4:8,column5:7,column6:8},{date:"2012-01-01 12:03",column1:6,column2:8,column3:3,column4:8,column5:5,column6:8}],valueAxes:[{includeGuidesInMinMax:!0,labelFunction:function(e){return 25===e?"Critically high":20===e?"High utilization":e}}],guides:[{value:25,toValue:25,lineColor:"#CC0000",fillAlpha:1,fillColor:"#CC0000"},{value:20,toValue:20,lineColor:"#CCF000",fillAlpha:1,fillColor:"#CCF000"}],categoryField:"date",categoryAxis:{parseDates:!0,minPeriod:"mm",axisAlpha:0,gridAlpha:.1}},networkTraffic:{id:"networkTraffic",dataDateFormat:"YYYY-MM-DD HH:NN",chartCursor:{enabled:!0,categoryBalloonDateFormat:"JJ:NN"},legend:{enabled:!0,useGraphSettings:!0},graphs:[{bullet:"none",valueField:"column1",fillAlphas:.7,title:"Packet Sensor (Chicago)"},{bullet:"none",valueField:"column2",fillAlphas:.7,title:"Packet Sensor (Los Angeles)"},{bullet:"none",valueField:"column3",fillAlphas:.7,title:"VMware Sensor (Los Angeles)"}],dataProvider:[{date:"2012-01-01",column1:8,column2:8,column3:8},{date:"2012-01-02",column1:10,column2:11,column3:9},{date:"2012-01-03",column1:11,column2:11,column3:9},{date:"2012-01-04",column1:8,column2:10,column3:9},{date:"2012-01-05",column1:10,column2:11,column3:9}],valueAxes:[{title:"Mbps",includeGuidesInMinMax:!0,labelFunction:function(e){return 25===e?"Critically high":20===e?"High utilization":e}}],guides:[{value:25,toValue:25,lineColor:"#CC0000",fillAlpha:1,fillColor:"#CC0000"},{value:20,toValue:20,lineColor:"#CCF000",fillAlpha:1,fillColor:"#CCF000"}],categoryField:"date",categoryAxis:{parseDates:!0,axisAlpha:0,gridAlpha:.1}},totalLgEvents:{id:"totalLgEvents",dataDateFormat:"YYYY-MM-DD HH:NN",chartCursor:{enabled:!0,categoryBalloonDateFormat:"JJ:NN"},legend:{enabled:!0,useGraphSettings:!0},graphs:[{bullet:"none",valueField:"value",fillAlphas:.7,title:"Log Sensor (Chicago)"}],dataProvider:[{date:"2012-01-01",value:2},{date:"2012-01-02",value:1},{date:"2012-01-03",value:2},{date:"2012-01-04",value:2.3},{date:"2012-01-05",value:1}],valueAxes:[{title:"Events Per Second",includeGuidesInMinMax:!0,labelFunction:function(e){return 25===e?"Critically high":20===e?"High utilization":e}}],guides:[{value:25,toValue:25,lineColor:"#CC0000",fillAlpha:1,fillColor:"#CC0000"},{value:20,toValue:20,lineColor:"#CCF000",fillAlpha:1,fillColor:"#CCF000"}],categoryField:"date",categoryAxis:{parseDates:!0,axisAlpha:0,gridAlpha:.1}}})}])}(),function(){"use strict";var e=angular.module("MyConfigurationModule");e.controller("myConfigurationController",["$scope","$window",function(e,o){console.log("myConfigurationController"),angular.extend(e,{})}])}(),function(){"use strict";var e=angular.module("MyAlertsModule");e.controller("myAlertsController",["$scope","$window",function(e,o){console.log("myAlertsController"),angular.extend(e,{})}])}(),function(){"use strict";var e=angular.module("MyPolicyManagementModule");e.controller("myPolicyManagementController",["$scope",function(e){}])}(),function(){"use strict";var e=angular.module("MyForensicsModule");e.controller("myForensicsController",["$scope",function(e){console.log("myForensicsController"),angular.extend(e,{})}])}(),function(){"use strict";var e=angular.module("MyLoginModule",["MyAuthModule"]);e.controller("myLoginController",["$rootScope","$state","$scope","myAuthService",function(e,o,l,t){l.submit=function(){e.isLoggedIn=!1,t.login({email:l.email,password:l.password}).then(function(e){o.go("dashboard")},function(e){console.log(e)})}}])}(),function(){"use strict";var e=angular.module("MySystemManagementModule");e.controller("mySystemManagementController",["$scope","$filter",function(e,o){angular.extend(e,{})}])}(),function(){"use strict";var e=angular.module("MyLogoutModule",["MyAuthModule"]);e.controller("myLogoutController",["$state","$rootScope","myAuthService",function(e,o,l){l.logout().then(function(){o.isLoggedIn=!1,e.go("login")})}])}(),function(){"use strict";var e=angular.module("MyActiveDirectionModule");e.controller("myActiveDirectionController",["$scope","$window",function(e,o){console.log("myConfigurationController"),angular.extend(e,{})}])}(),function(){"use strict";var e=angular.module("MySNMPModule");e.controller("mySNMPController",["$scope","$window",function(e,o){console.log("mySNMPController"),angular.extend(e,{})}])}(),function(){"use strict";var e=angular.module("MyEmailModule");e.controller("myEmailController",["$scope",function(e){console.log("myEmailController"),angular.extend(e,{})}])}(),function(){"use strict";var e=angular.module("MySyslogModule");e.controller("mySyslogController",["$scope","$window",function(e,o){console.log("mySyslogController"),angular.extend(e,{})}])}(),function(){"use strict";var e=angular.module("MyUserModule");e.controller("myUserController",["$scope","$window",function(e,o){console.log("myUserController"),angular.extend(e,{addUserGroup:function(){console.log("add user group")}})}])}(),function(){"use strict";var e=angular.module("MyLocationsModule");e.controller("myLocationsController",["$scope","myUsersService",function(e,o){angular.extend(e,{users:[]}),o.getUsers().then(function(o){e.users=o.data},function(e){console.log(e)})}])}(),function(){"use strict";var e=angular.module("MyObjectsModule");e.controller("myObjectsController",["$scope","myUsersService","myNetworksService",function(e,o,l){angular.extend(e,{users:[],networks:[]}),o.getUsers().then(function(o){e.users=o.data},function(e){console.log(e)}),l.getNetworks().then(function(o){e.networks=o.data},function(e){console.log(e)})}])}(),function(){"use strict";var e=angular.module("MyNetworksModule");e.controller("myNetworksController",["$scope","myNetworksService",function(e,o){angular.extend(e,{networks:[]}),o.getNetworks().then(function(o){e.networks=o.data},function(e){console.log(e)})}])}(),function(){"use strict";var e=angular.module("MyUpgradeModule");e.controller("myUpgradeController",["$scope","$filter","myUpgradeService",function(e,o,l){angular.extend(e,{hosts:[],update:function(o){o.updating=!0,setInterval(function(){e.$apply(function(){o.updating=!1})},2e4)},addHost:function(){alert("add host")},removeHosts:function(){var t=[];e.hosts=o("filter")(e.hosts,function(e){return e.selected?(t.push(e),!1):!0}),l.removeHosts(t)},checkAllHosts:function(){e.selectedAll=!e.selectedAll,angular.forEach(e.hosts,function(o){o.selected=e.selectedAll})}}),l.getHosts().then(function(o){e.hosts=o},function(e){console.log(e)})}])}(),function(){"use strict";var e=angular.module("MyUsersModule");e.controller("myUsersController",["$scope","$filter","myUsersService",function(e,o,l){angular.extend(e,{users:[],sort:{type:null,reverse:null},sortBy:function(o){e.sort.type=o,e.sort.reverse=!e.sort.reverse}}),l.getUsers().then(function(o){e.users=o.data},function(e){console.log(e)})}])}(),function(){"use strict";var e=angular.module("MyHealthModule"),o=function(e,o){var l={axes:[{axisThickness:1,axisAlpha:.2,tickAlpha:.2,valueInterval:o.valueInterval,bands:o.bands,bottomText:o.name,bottomTextYOffset:20,endValue:o.endValue}],arrows:[{}],"export":{enabled:!1},allLabels:[],balloon:{},titles:[]};return angular.extend(l,e),l};e.controller("myHealthController",["$scope","$filter","myHealthService",function(e,l,t){angular.extend(e,{guages:{headUnit:{memoryProcess:o({id:"headUnitMemoryProcess",name:"Memory Process",measurementUnit:"Gb",movementSize:6},{valueInterval:6,endValue:96,bands:[{color:"#484848",endValue:96,startValue:0}]}),cpu:o({id:"headUnitMCpu",name:"CPU",measurementUnit:"%",movementSize:5},{valueInterval:5,endValue:100,bands:[{color:"#84b761",endValue:100,startValue:0}]}),memoryProcessMax:o({id:"headUnitMemoryProcessMax",name:"Memory Process Max",measurementUnit:"Tb",movementSize:.8},{valueInterval:1,endValue:5,bands:[{color:"#A6B123",endValue:5,startValue:0}]})},analyzer:{memoryProcess:o({id:"analyzerHeadUnitMemoryProcess",name:"Memory Process",measurementUnit:"Gb",movementSize:6},{valueInterval:6,endValue:96,bands:[{color:"#484848",endValue:96,startValue:0}]}),cpu:o({id:"analyzerHeadUnitMCpu",name:"CPU",measurementUnit:"%",movementSize:5},{valueInterval:5,endValue:100,bands:[{color:"#84b761",endValue:100,startValue:0}]}),memoryProcessMax:o({id:"analyzerHeadUnitMemoryProcessMax",name:"Memory Process Max",measurementUnit:"Tb",movementSize:.8},{valueInterval:1,endValue:5,bands:[{color:"#A6B123",endValue:5,startValue:0}]})},sensor:{memoryProcess:o({id:"sensorHeadUnitMemoryProcess",name:"Memory Process",measurementUnit:"Gb",movementSize:6},{valueInterval:6,endValue:96,bands:[{color:"#484848",endValue:96,startValue:0}]}),cpu:o({id:"sensorHeadUnitMCpu",name:"CPU",measurementUnit:"%",movementSize:5},{valueInterval:5,endValue:100,bands:[{color:"#84b761",endValue:100,startValue:0}]}),memoryProcessMax:o({id:"sensorHeadUnitMemoryProcessMax",name:"Memory Process Max",measurementUnit:"Tb",movementSize:.8},{valueInterval:1,endValue:5,bands:[{color:"#A6B123",endValue:5,startValue:0}]})}}})}])}(),function(){"use strict";var e,o,l=angular.module("MyChartsModule");l.directive("myGaugeChart",function(){return{restrict:"A",templateUrl:"app/shared/directives/charts/my-gauge-chart-tpl.html",scope:{chartData:"=chartData"},link:function(l,t,n){o=l.chartData;var a=o.id;t.append("<div id='"+a+"'></div>"),angular.extend(o,{type:"gauge",theme:"light"}),e=AmCharts.makeChart(a,o)},controller:["$scope",function(e){}]}})}(),function(){"use strict";var e,o,l=angular.module("MyChartsModule");l.directive("myLineChart",function(){return{restrict:"A",templateUrl:"app/shared/directives/charts/my-line-chart-tpl.html",scope:{chartData:"=chartData"},link:function(l,t,n){o=l.chartData;var a=o.id;t.append("<div id='"+a+"'></div>"),angular.extend(o,{type:"serial",theme:"light",pathToImages:"assets/libs/amcharts/3/images/"}),e=AmCharts.makeChart(a,o)}}})}(),function(){"use strict";var e=angular.module("MyAuthModule");e.factory("myAuthService",["$q","$window",function(e,o){return{login:function(l){return e(function(e,t){if("hayk@gmail.com"===l.email&&"vayquara"===l.password){var n={email:l.email,token:""};o.sessionStorage.setItem("currentUser",JSON.stringify(n)),e(n)}else t("No user credentials given")})},logout:function(){return e(function(e,l){o.sessionStorage.removeItem("currentUser"),e()})},isLoggedIn:function(){var e=o.sessionStorage.getItem("currentUser");return e?JSON.parse(e):!1}}}])}(),function(){"use strict";var e=angular.module("MyObjectsModule");e.factory("myObjectsService",["$q","$window",function(e,o){return{getObjects:function(){return e(function(e,o){e([{name:"10.0.0.1",values:["10.0.0.1"]},{name:"172.16.0.255",values:["172.16.0.255"]},{name:"192.168.0.0",values:["192.168.0.0"]},{name:"Canada",values:["10.103.0.0"]},{name:"CgoVDC - Qualys devices",values:["10.103.0.87","10.103.0.91","10.103.0.89"]}])})}}}])}(),function(){"use strict";var e=angular.module("MyNetworksModule");e.factory("myNetworksService",["$http",function(e){return{getNetworks:function(){return e({method:"GET",url:"api/networks.json"})}}}])}(),function(){"use strict";var e=angular.module("MyUpgradeModule");e.factory("myUpgradeService",["$q","$window",function(e,o){return{getHosts:function(){return e(function(e,o){e([{name:"Head",host:"10.0.0.1",totalMemory:"94.56 GB",cpu:"2%",os:"Linux 2.6.32-431.2",uptime:"1 week 3 days 2h 23m",selected:!1,updates:{available:0,text:"Up-to-Date"}},{name:"Analyzer",host:"10.0.0.2",totalMemory:"94.56 GB",cpu:"2%",os:"Linux 2.6.32-431.2",uptime:"1 week 2 days 2h 2m",selected:!1,updates:{available:0,text:"Up-to-Date"}},{name:"Network Packet sensor",host:"10.100.0.1",totalMemory:"94.56 GB",cpu:"",os:"Linux 2.6.32-431.2",uptime:"3 week 1 days 14h 1m",updates:{available:1,text:""}},{name:"Network Packet sensor",host:"10.200.0.1",totalMemory:"94.56 GB",cpu:"2.77%",os:"Linux 2.6.32-431.2",uptime:"1 week 2 days 2h 2m",updates:{available:0,text:"Up-to-Date"}},{name:"Log sensor",host:"10.100.0.2",totalMemory:"94.56 GB",cpu:"0.31%",os:"Linux 2.6.32-431.2",uptime:"1 week 2 days 2h 2m",updates:{available:0,text:"Up-to-Date"}},{name:"VMware Sensor",host:"10.300.0.1",totalMemory:"94.56 GB",cpu:"1.56%",os:"Linux 2.6.32-431.2",uptime:"1 week 2 days 2h 2m",updates:{available:0,text:"Up-to-Date"}}])})},removeHosts:function(e){console.log(e)}}}])}(),function(){"use strict";var e=angular.module("MyUsersModule");e.factory("myUsersService",["$http",function(e){return{getUsers:function(){return e({method:"GET",url:"api/users.json"})}}}])}(),function(){"use strict";var e=angular.module("MyHealthModule");e.factory("myHealthService",["$q",function(e){return{get:function(o){return e(function(e,l){var t=Math.round(Math.random()*o);e(t)})}}}])}();