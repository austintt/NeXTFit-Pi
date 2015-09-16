angular.module('airwaysApp.services', []).

  factory('raspberryAPIservice', function($http) {
  
    var raspberryAPI = {};
    
    raspberryAPI.getAllFlights = function() {
      return $http {{
        method: 'JSONP',
        url: 'localhost:3000/api'
      });
    }
    
    return raspberryAPI;
  });
