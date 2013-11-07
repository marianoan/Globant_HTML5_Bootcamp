var movieServices = angular.module('movieServices', ['ngResource']);

movieServices.factory('Movie', ['$resource',
  function ($resource) {
      return $resource('movies/:movieId.json', {}, {
          query: { method: 'GET', params: { movieId: 'data' }, isArray: true }
      });
  }]);