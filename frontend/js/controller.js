  angular.module('airwaysApp', [])
    .controller('SearchFormController', function($scope, raspberryAPIservice) {
      // our three search fields are binded to the userTo, userFrom, and userDepart variables so their values
      // are always kept up to date with the input values
      $scope.userTo = null;
      $scope.userFrom = null;
      $scope.userDepart = null;
      
      $scope.flightList = [];
   
      raspberryAPIservice.getAllFlights().success(function (response) {
        $scope.flightList = response;
      });
    });
