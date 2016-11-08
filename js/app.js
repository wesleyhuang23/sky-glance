angular.module('myApp', ['ui.router'])
.config(function($urlRouterProvider, $stateProvider){

  $urlRouterProvider.otherwise('/');

  $stateProvider.state('home', {
    templateUrl: './views/home.html',
    url: '/',
    controller: 'homeCtrl'
  });
});
