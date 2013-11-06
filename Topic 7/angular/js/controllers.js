/*var movieApp = angular.module('movieApp', []);

movieApp.controller('MovieListCtrl', function MovieListCtrl($scope, $http) {
        $http.get('data.json').success(function(data) {
            $scope.movies = data;
        });

    $scope.orderProp = 'name'
});
*/

var movieControllers = angular.module('movieControllers', []);

movieControllers.controller('MovieListCtrl', ['$scope', '$http',
  function MovieListCtrl($scope, $http) {
      $http.get('data.json').success(function (data) {
          $scope.movies = data;
      });

      $scope.orderProp = 'name';
  }]);

movieControllers.controller('MovieDetailCtrl', ['$scope', '$routeParams',
  function ($scope, $routeParams) {
      $scope.movieId = $routeParams.movieId;
  }]);