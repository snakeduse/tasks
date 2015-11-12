(function () {
    'use strict';

    angular
        .module('tasksApp')
        .controller('tasksController', tasksController);

    tasksController.$inject = ['$scope', 'Tasks', '$mdDialog'];

    function tasksController($scope, Tasks, $mdDialog) {
        $scope.Tasks = Tasks.query();

        $scope.showAlert = function (ev) {
            var confirm = $mdDialog.confirm()
                  .title('Create new card')
                  .content('All of the banks have agreed to <span class="debt-be-gone">forgive</span> you your debts.')
                  .ariaLabel('Lucky day')
                  .targetEvent(ev)
                  .ok('Create')
                  .cancel('Cancel');

            $mdDialog.show(confirm).then(function () {
                $scope.status = 'You decided to get rid of your debt.';
            }, function () {
                $scope.status = 'You decided to keep your debt.';
            });
        };
    }
})();
