'use strict';

/**
 * @ngdoc overview
 * @name codeFreshDemoApp
 * @description
 * # codeFreshDemoApp
 *
 * Main module of the application.
 */
angular
  .module('codeFreshDemoApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'angularMoment',
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
    .state('projects', {
        url: '/projects',
        templateUrl: 'views/projects.html',
        controller: 'ProjectsCtrl'
      })
      .state('new-project', {
        url: '/new-project',
        templateUrl: 'views/new-project.html',
        controller: 'NewProjectCtrl'
      })
      .state('environments', {
        url: '/environments',
        templateUrl: 'views/environment.html',
        controller: 'EnvironmentCtrl'
      }).state('ide', {
        url: '/ide',
        templateUrl: 'views/ide.html',
        controller: 'IdeController'
        
      })

      $urlRouterProvider.otherwise('/projects');

 
  }).run(function($state)
  {
    $state.go('new-project');
  });
