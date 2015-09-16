var app = angular.module('airwaysApp', []);

app.controller('searchForm', function($scope) 
{
    $scope.master = {From:"Dan", To:"", Depart:""};
    $scope.submit = function() {
        $scope.passenger = angular.copy($scope.master);
    };
    $scope.submit();
});