'use strict';

/**
 * @ngdoc function
 * @name sliceCrowdApp.controller:PostCtrl
 * @description
 * # PostCtrl
 * Controller of the sliceCrowdApp
 */
angular.module('sliceCrowdApp')
  .controller('PostCtrl', ["$scope", "$firebaseObject", "$routeParams", function($scope, $firebaseObject, $routeParams) {
    var ref = new Firebase("https://slice-crowd.firebaseio.com/posts/" + $routeParams.ID);

    $scope.post = $firebaseObject(ref);

  }]);
