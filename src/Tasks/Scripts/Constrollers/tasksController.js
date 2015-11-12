(function () {
    'use strict';

    angular
        .module('tasksApp')
        .controller('tasksController', tasksController);

    tasksController.$inject = ['$scope', 'Tasks', '$mdDialog']; 

    function tasksController($scope, Tasks, $mdDialog) {
        $scope.Tasks = Tasks.query();

        $scope.showAlert = function (ev) {
            $mdDialog.show(
              $mdDialog.alert()
                .parent(angular.element(document.querySelector('#popupContainer')))
                .clickOutsideToClose(true)
                .title('Create new card')
                .content('You can specify some description text in here.')
                .ariaLabel('Alert Dialog Demo')
                .ok('Create')
                .targetEvent(ev)
            );
        };
    }
})();
