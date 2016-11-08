angular.module('myApp').controller('homeCtrl', function($scope, mainSvc){

  $scope.getLocalWeather = function(city){
    mainSvc.getLocalWeather().then(function(response){
      $scope.weather = response;
      console.log($scope.weather);
    });
  };


});
