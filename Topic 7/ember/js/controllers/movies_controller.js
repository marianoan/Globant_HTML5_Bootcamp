Movies.MoviesController = Ember.ArrayController.extend({
    actions: {
        save: function () {
            /*console.log(this.get('name'));
            console.log(this.get("model").get("year"));

            var name = this.get('name');
            var year = this.get('year');
            var director = this.get('director');
            var img = this.get('img');
            var cast = this.get('cast');
            var sinopsis = this.get('sinopsis');

            var movie = this.store.createRecord('movie', {
                name: name,
                year: year,
                director: director,
                img: img,
                cast: cast,
                sinopsis: sinopsis,
            });



            console.log(movie);
            //this.get("model").save();
            movie.save();*/

            var output = this.get('model');

            output.set('title', this.get('title'));
            output.set('receiver', this.get('receiver'));
            output.set('value', this.get('value'));

            output.save();

        }
    }
});