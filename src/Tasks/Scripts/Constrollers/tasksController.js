(function () {
    'use strict';

    angular
        .module('tasksApp').config(function ($mdThemingProvider) {
            $mdThemingProvider.theme('default')
              .primaryPalette('light-green')
              .accentPalette('orange');
        })
        .controller('tasksController', tasksController);

    tasksController.$inject = ['$scope', 'Tasks']; 

    function tasksController($scope, Tasks) {
        $scope.Tasks = Tasks.query();
    }
})();
