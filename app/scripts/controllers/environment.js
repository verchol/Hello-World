'use strict';

/**
 * @ngdoc function
 * @name codeFreshDemoApp.controller:EnvironmentCtrl
 * @description
 * # EnvironmentCtrl
 * Controller of the codeFreshDemoApp
 */
angular.module('codeFreshDemoApp')
  .controller('EnvironmentCtrl', function ($scope) {
    $scope.mv = {
      project: {
        projectId: 'a5a79888-e49c-42c0-a4d3-27febffcf5b1',
        title: 'Roy\'s Sheepshed',
        color: '#1abc9c',
        icon: 'images/user/project-icon1.png',
        pendingTasks: 4,
        lastModified: 1399236400,
        lastBuild: 1399766400,
        buildSuccess: true,
        progress: 0.3
      }
    }
  });
