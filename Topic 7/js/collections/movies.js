define([
  'underscore',
  'backbone',
  'localStorage',
  'models/Movie',
], function (_, Backbone, localStorage,Movie) {

    var Movies = Backbone.Collection.extend({
        model: Movie,

        localStorage: new localStorage('contact_list_backbone'),

        //url: "js/collection.html",

        nextOrder: function () {
            if (!this.length) {
                return 1;
            }
            return this.last().get('order') + 1;
        },



    });
    // You don't usually return a collection instantiated
    return Movies;
});
