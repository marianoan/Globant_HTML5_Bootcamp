Movies.Router.map(function () {
    this.resource('movies', { path: '/' });
    this.resource('new-movie', { path: '/new' });
});

Movies.MoviesRoute = Ember.Route.extend({
    model: function () {
        return this.store.find('movie');
    },

    /*actions: {
        save: function(movie) {
            movie.save();
        }
    }*/
});