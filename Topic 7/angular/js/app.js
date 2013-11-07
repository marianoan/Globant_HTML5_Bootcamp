var movieApp = angular.module('movieApp', [
  'ngRoute',
  'movieControllers',
  'movieServices'
]);

movieApp.config(['$routeProvider',
  function ($routeProvider) {
      $routeProvider.
        when('/movies', {
            templateUrl: 'templates/movie-list.html',
            controller: 'MovieListCtrl'
        }).
        when('/new', {
            templateUrl: 'templates/add-movie.html',
            controller: 'MovieAddCtrl'
        }).
        when('/edit/:movieId', {
            templateUrl: 'templates/edit-movie.html',
            controller: 'MovieDetailCtrl'
        }).
        when('/movies/:movieId', {
            templateUrl: 'templates/movie-detail.html',
            controller: 'MovieDetailCtrl'
        }).
        otherwise({
            redirectTo: '/movies'
        });
  }]);