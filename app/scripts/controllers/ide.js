'use strict';

/**
 * @ngdoc function
 * @name codeFreshDemoApp.controller:NewProjectCtrl
 * @description
 * # NewProjectCtrl
 * Controller of the codeFreshDemoApp
 */
angular.module('codeFreshDemoApp')
  .controller('IdeController', ["$scope", "Project", "$state", "$http" ,function ($scope, Project, $state, $http)
    
  {
    $scope.onPush =  function()
    {
        
       $http.post("/deploy");
    }
  }]);

  

