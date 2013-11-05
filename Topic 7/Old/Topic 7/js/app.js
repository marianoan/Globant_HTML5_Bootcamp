/*jslint indent: 2, browser: true, white: false*/
/*global Backbone*/

/**
 * Main App.js
 * @author Rebolini Pablo <pablo.rebolini@globant.com>
 */

/**
 * Modelo Movie
 */
var MovieModel = Backbone.Model.extend({
  defaults: {
    movie_id: 1,
    movie_img: 'http://placehold.it/370x75',
    movie_title: 'Lorem',
    movie_desc: 'No data loaded...'
  }
});

/**
 * Visor Movie
 */
var MovieView = Backbone.View.extend({
  el: '.js-tpl-movieBlock',

  // Este paso de variables
  // se debe poder simplificar
  initialize: function (context) {
    this.render(context);
  },

  render: function (context) {
    var tpl = _.template($("#tpl_movie_block").html(), context);
    this.$el.append(tpl);

    $('.js-loading').fadeOut();
  }
});

/**
 * Coleccion Movie
 */
var MovieCollection = Backbone.Collection.extend({
  url: "/data.json",
  model: MovieModel,

  initialize: function () {
    $('.js-loading').fadeIn();
    this.fetch({add: true}).done(function (models) {
      _.each(models.movies, function (model) {
        var mv = new MovieView(model);
      });
    });
  },

  parse: function (data) {
    return data;
  }
});

/**
 * Rutas Movie
 * @todo Falta implementar la vista para 1 sola pelicula
 */
var MovieRouter = Backbone.Router.extend({
  routes: {
    "movie/:id":"getMovie",
    "*actions": "movieListing"
  }
});