'use strict';

/**
 * @ngdoc function
 * @name codeFreshDemoApp.controller:ProjectsCtrl
 * @description
 * # ProjectsCtrl
 * Controller of the codeFreshDemoApp
 */
angular.module('codeFreshDemoApp')
  .controller('ProjectsCtrl', ["$scope", "Project", function ($scope, Project) {

  console.log("in project controller");

    var projectTmpl =  {
          projectId: 'a5a79888-e49c-42c0-a4d3-27febffcf5b1',
          title: 'Roy\'s Sheepshed',
          color: '#1abc9c',
          icon: 'images/user/project-icon1.png',
          pendingTasks: 4,
          numNotifications: 5,
          lastBuild: 1399766400,
          buildSuccess: true,
          progress: 0.3
        };

    var projects =  [
        {
          projectId: 'a5a79888-e49c-42c0-a4d3-27febffcf5b1',
          title: 'Roy\'s Sheepshed',
          color: '#1abc9c',
          icon: 'images/user/project-icon1.png',
          pendingTasks: 4,
          numNotifications: 5,
          lastBuild: 1399766400,
          buildSuccess: true,
          progress: 0.3
        },
        {
          projectId: '3c0a7d0e-8ee4-4a82-b7d7-37c0d0d24e58',
          title: 'Zara',
          color: '#e57c7c',
          icon: '',
          pendingTasks: 5,
          numNotifications: 0,
          lastBuild: 1402913200,
          buildSuccess: false,
          progress: 1
        },
        {
          projectId: '873f7480-d79b-4caa-8561-0d796671b393',
          title: 'Polar Expedition',
          color: '#f1c40f',
          icon: '',
          pendingTasks: 7,
          numNotifications: 0,
          lastBuild: 1402960000,
          buildSuccess: true,
          progress: 0.7
        },
        {
          projectId: '63ec291f-48c7-46ee-90e3-63d13876cc54',
          title: 'Whitewate Rafting',
          color: '#f18833',
          icon: '',
          pendingTasks: 1,
          numNotifications: 1,
          lastBuild: 1402903200,
          buildSuccess: false,
          progress: 0.55
        },
        {
          projectId: '9eee12e4-4e7e-48b1-bcd0-fbbac23c2ad1',
          title: 'Zara',
          color: '#3ca1e7',
          icon: '',
          pendingTasks: 5,
          numNotifications: 0,
          lastBuild: 1402913200,
          buildSuccess: true,
          progress: 0.2
        }
      ];
    for (var i = 0 ;i < 0; i ++)
       {
         var p = _.clone(projectTmpl);
         p.color = 'red';
         p.lastBuild =  "1399766300"
         projects.push(p);
       }

    $scope.mv = {
      "projects": Project.getAllProjects(false)
    };

    
  }]);
