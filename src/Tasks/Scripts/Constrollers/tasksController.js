(function () {
    'use strict';

    angular
        .module('tasksApp')
        .controller('tasksController', tasksController);

    tasksController.$inject = ['$scope', 'Tasks', '$mdDialog'];

    function tasksController($scope, Tasks, $mdDialog) {

        $scope.Tasks = Tasks.query();
        $scope.showAlert = function (ev) {
            $mdDialog.show({
                controller: DialogController,
                templateUrl: 'create_dialog.tmpl.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: false
            })
            .then(function (answer) {
                $scope.status = 'You said the information was "' + answer + '".';
            }, function () {
                $scope.status = 'You cancelled the dialog.';
            });
        };

        $scope.incrementIteration = function (task) {
            task.PomodoroExecuted++;
        }

        $scope.addNewTask = (function (ev) {
            $mdDialog.show({
                controller: CreateTaskController,
                templateUrl: 'create_task_dialog.tmpl.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: false
            })
            .then(function (newTask) {
                newTask.PomodoroExecuted = 0;
                $scope.Tasks.push(newTask);

            }, function () {
                // cancel
            });
        });
            /*(function () {
            $scope.Tasks.push({ Title: "New task", PomodoroCount: 0, PomodoroExecuted: 0, IsEdit: true});
        });*/
    }

    DialogController.$inject = ['$scope', 'Tasks', '$mdDialog'];

    function DialogController($scope, Tasks, $mdDialog) {
        $scope.hide = function () {
            $mdDialog.hide();
        };
        $scope.cancel = function () {
            $mdDialog.cancel();
        };
    }

    CreateTaskController.$inject = ['$scope', 'Tasks', '$mdDialog'];

    function CreateTaskController($scope, Tasks, $mdDialog) {
        $scope.hide = function (newTask) {            
            $mdDialog.hide(newTask);
        };
        $scope.cancel = function () {
            $mdDialog.cancel();
        };        
    }
})();
