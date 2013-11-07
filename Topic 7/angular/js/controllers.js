var movieControllers = angular.module('movieControllers', []);

/*movieControllers.controller('MovieListCtrl', ['$scope', 'Movie', function ($scope, Movie) {
      $scope.movies = Movie.query();
      $scope.orderProp = 'name';

  }]);*/

movieControllers.controller('MovieListCtrl', function MovieListCtrl($scope, $location, $http) {
    $http.get('movies/data.json').success(function (data) {
        $scope.movies = data;
    });

    $scope.orderProp = 'name';

    $scope.go = function (path) {
        $location.path(path);
    };
});

movieControllers.controller('MovieAddCtrl', function MovieAddCtrl($scope, $http) {
    /*$http.get('movies/data.json').success(function (data) {
        $scope.movies = data;
    });

    $scope.orderProp = 'name';*/
});



/*movieControllers.controller('MovieDetailCtrl', ['$scope', '$routeParams', 'Movie',
  function ($scope, $routeParams, Movie) {

      $scope.movie = Movie.get({ movieId: $routeParams.movieId }, function (data) {
          $scope.movie = data;
      });

  }]);*/

movieControllers.controller('MovieDetailCtrl', ['$scope', '$routeParams', '$http',
  function ($scope, $routeParams, $http) {

      $http.get('movies/' + $routeParams.movieId + '.json').success(function (data) {
          $scope.movie = data;
      });
  }]);

