'use strict';

/**
 * @ngdoc function
 * @name codeFreshDemoApp.controller:NewProjectCtrl
 * @description
 * # NewProjectCtrl
 * Controller of the codeFreshDemoApp
 */
angular.module('codeFreshDemoApp')
  .controller('NewProjectCtrl', ["$scope", "Project", "$state", function ($scope, Project, $state) {

    $scope.onFinish =  function()
    {
        Project.createNew();
        $state.go("projects");

    }
    $scope.repositories = [
      {
        id: 'github',
        label: 'GitHub'
      },
      {
        id: 'bitbucket',
        label: 'BitBucket'
      },
      {
        id: 'gitlab',
        label: 'GitLab'
      },
      {
        id: 'googlecode',
        label: 'GoogleCode'
      }
    ];

    $scope.deployments = [
      {
        id: 'octopus',
        label: 'Octopus'
      },
      {
        id: 'heroku',
        label: 'Heroku'
      },
      {
        id: 'bamboo',
        label: 'Bamboo'
      },
      {
        id: 'amazon',
        label: 'Amazon'
      }
    ];

    $scope.monitors = [
      {
        id: 'solarwinds',
        label: 'SolarWinds'
      },
      {
        id: 'Nagios',
        label: 'Nagios'
      },
      {
        id: 'bandwidthd',
        label: 'BandWidthD'
      },
      {
        id: 'easynetmonitor',
        label: 'EasyNetMonitor'
      }
    ];

    $scope.trackingSystems = [
      {
        id: 'jira',
        label: 'JIRA'
      },
      {
        id: 'fogbugz',
        label: 'FogBugz'
      },
      {
        id: 'bugzilla',
        label: 'Bugzilla'
      },
      {
        id: 'pivotaltracker',
        label: 'Pivotal Tracker'
      }
    ];

    $scope.mv = {
      project: {
        title: 'Vote for Pedro',
        tools: {
          repository: [$scope.repositories[0]],
          deployment: [$scope.deployments[2]],
          monitoring: [$scope.monitors[1]],
          issueTracker: [$scope.trackingSystems[1], $scope.trackingSystems[3]],
        }
      }
    } 

    $scope.isInList = function(list, item) {
      return list.indexOf(item) !== -1;
    };

    $scope.changeInList = function(list, item) {
      if($scope.isInList(list, item)) {
        var itemIndex = list.indexOf(item);

        list.splice(itemIndex, 1);
      } else {
        list.push(item);
      }

      console.log(list);
    }
  }]);
