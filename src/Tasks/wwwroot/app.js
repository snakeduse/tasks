!function(){"use strict";angular.module("tasksApp",["tasksService","ngMaterial"])}(),function(){"use strict";function a(a,c,d){a.Tasks=c.query(),a.showAlert=function(c){d.show({controller:b,templateUrl:"create_dialog.tmpl.html",parent:angular.element(document.body),targetEvent:c,clickOutsideToClose:!1}).then(function(b){a.status='You said the information was "'+b+'".'},function(){a.status="You cancelled the dialog."})},a.incrementIteration=function(a){a.PomodoroExecuted++}}function b(a,b,c){a.hide=function(){c.hide()},a.cancel=function(){c.cancel()}}angular.module("tasksApp").controller("tasksController",a),a.$inject=["$scope","Tasks","$mdDialog"],b.$inject=["$scope","Tasks","$mdDialog"]}(),function(){"use strict";var a=angular.module("tasksService",["ngResource"]);a.factory("Tasks",["$resource",function(a){return a("/api/tasks",{},{query:{method:"GET",params:{},isArray:!0}})}])}();