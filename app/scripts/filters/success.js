'use strict';

/**
 * @ngdoc filter
 * @name codeFreshDemoApp.filter:success
 * @function
 * @description
 * # success
 * Filter in the codeFreshDemoApp.
 */
angular.module('codeFreshDemoApp')
  .filter('success', function () {
    return function (input) {
      return input ? 'Success' : 'Failure';
    };
  });
