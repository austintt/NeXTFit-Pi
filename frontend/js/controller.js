  angular.module('airwaysApp', [])
    .controller('SearchFormController', function($scope, $http) {
      // our three search fields are binded to the userTo, userFrom, and userDepart variables so their values
      // are always kept up to date with the input values
      $scope.userTo = null;
      $scope.userFrom = null;
      $scope.userDepart = null;
      
      $scope.flightList = [];
   
      if($scope.userTo == undefined) {
        $scope.userTo = 'New York City';
        fetch();
      }

      function fetch() {
        $http.get("localhost:3000/api" + $scope.userTo)
        .success(function(response){$scope.details = response;});
      }
