var movieControllers = angular.module('movieControllers', []);

movieControllers.controller('MovieListCtrl', ['$scope', 'Movie', function ($scope, Movie) {
      $scope.movies = Movie.query();
      $scope.orderProp = 'name';

  }]);




movieControllers.controller('MovieDetailCtrl', ['$scope', '$routeParams', 'Movie',
  function ($scope, $routeParams, Movie) {

      $scope.movie = Movie.get({ movieId: $routeParams.movieId }, function (data) {
          $scope.movie = data;
      });

      $scope.go = function (path) {
          $location.path(path);
      };
  }]);

