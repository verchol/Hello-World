'use strict';

/**
 * @ngdoc function
 * @name codeFreshDemoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the codeFreshDemoApp
 */
angular.module('codeFreshDemoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.mv = {
      user: {
        firstName: 'Adam',
        surName: 'Smith',
        avatarUrl: '/images/user/user-profile.png'
      }
    }
  });
