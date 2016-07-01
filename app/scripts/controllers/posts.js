'use strict';

/**
 * @ngdoc function
 * @name sliceCrowdApp.controller:PostsCtrl
 * @description
 * # PostsCtrl
 * Controller of the sliceCrowdApp
 */
angular.module('sliceCrowdApp')
  .controller('PostsCtrl', ["$scope", "$firebaseArray", function($scope, $firebaseArray) {
    var ref = new Firebase("https://slice-crowd.firebaseio.com/posts");
    $scope.data = $firebaseArray(ref);
  }]);
