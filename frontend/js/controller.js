  angular.module('airwaysApp', [])
    .controller('SearchFormController', ['$scope', function($scope, API) {
      $scope.flightList = [
    {
      Flight: {
        price: '$300.00',
        departure: '6:00 am',
        arrival: '3:00 pm',
        origin: 'SAT',
        destination: 'NYC',
        duration: '8 hours',
        number of seats available: '16',
      }
    }]);



  // $scope.update = function(user) {
  //       $scope.master = angular.copy(user);
  //     };

  //     $scope.reset = function() {
  //       $scope.user = angular.copy($scope.master);
  //     };

      // $scope.reset();
