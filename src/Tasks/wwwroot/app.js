!function(){"use strict";angular.module("tasksApp",["tasksService","ngMaterial"])}(),function(){"use strict";function a(a,b,c){a.Tasks=b.query(),a.showAlert=function(b){var d=c.confirm().title("Create new card").content('All of the banks have agreed to <span class="debt-be-gone">forgive</span> you your debts.').ariaLabel("Lucky day").targetEvent(b).ok("Create").cancel("Cancel");c.show(d).then(function(){a.status="You decided to get rid of your debt."},function(){a.status="You decided to keep your debt."})}}angular.module("tasksApp").controller("tasksController",a),a.$inject=["$scope","Tasks","$mdDialog"]}(),function(){"use strict";var a=angular.module("tasksService",["ngResource"]);a.factory("Tasks",["$resource",function(a){return a("/api/tasks",{},{query:{method:"GET",params:{},isArray:!0}})}])}();