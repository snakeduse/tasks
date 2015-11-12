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
})();
