  angular.module('airwaysApp', [])
    .controller('SearchFormController', ['$scope', function($scope, raspberryAPIservice) {
      $scope.user.To = null;
      $scope.user.From = null;
      $scope.user.Depart = null;
      $scope.flightList = [];
      
      raspberryAPIservice.getFlights().success(function (response) {
        $scope.flightList = response.//MRData.StandingsTable.StandingsList[0].DriverStandings;
      });
    });

// the code above was essentially copied from the tutorial I am using with racecar data

  // $scope.update = function(user) {
  //       $scope.master = angular.copy(user);
  //     };

  //     $scope.reset = function() {
  //       $scope.user = angular.copy($scope.master);
  //     };

      // $scope.reset();
