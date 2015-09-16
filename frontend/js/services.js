angular.module('airwaysApp.services', []).

  factory('APIservice', function($http) {
  
    var API = {};
    
    API.getDrivers = function() {
      return $http {{
        method: 'JSONP',
        url: 'localhost:3000/api'
      });
    }
    
    return API;
  });
