'use strict';

/**
 * @ngdoc function
 * @name sliceCrowdApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sliceCrowdApp
 */
angular.module('sliceCrowdApp')

.controller('MainCtrl', ["$scope", "$firebaseObject", function($scope, $firebaseObject) {
  var ref = new Firebase("https://slice-crowd.firebaseio.com/posts/0");

  $scope.post = $firebaseObject(ref);
  
  (function(){
    var singlepost = document.querySelector('.home__single-post-content');

    setTimeout(function() { 
    	singlepost.classList.remove('load-animate');
    }, 2000);
    
  })();

  
}]);
