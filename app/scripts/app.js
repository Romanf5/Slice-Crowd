'use strict';

/**
 * @ngdoc overview
 * @name sliceCrowdApp
 * @description
 * # sliceCrowdApp
 *
 * Main module of the application.
 */
angular
  .module('sliceCrowdApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'firebase'
  ])
  .config(function() {
    new WOW().init();
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/posts', {
        templateUrl: 'views/posts.html',
        controller: 'PostsCtrl',
        controllerAs: 'posts'
      })
      .when('/posts/:ID', {
        templateUrl: 'views/post.html',
        controller: 'PostCtrl',
        controllerAs: 'singlePost'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
