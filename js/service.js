angular.module('myApp').service('mainSvc', function($http){

  this.getLocalWeather = function(city){
    return $http({
      method: 'get',
      url:"http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=1aff477dad7b479ba5216139ef765d1a"
    }).then(function(response){
      console.log(response.data);
      return response.data;
    });
  };

});
