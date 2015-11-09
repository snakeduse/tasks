(function () {
    'use strict';

    angular.module('tasksApp', [
        'tasksService',
        'ngMaterial'
    ]).config(function ($mdThemingProvider) {
        $mdThemingProvider.theme('default')
          .primaryPalette('light-green')
          .accentPalette('orange');
    });
})();