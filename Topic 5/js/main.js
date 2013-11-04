require.config({
    baseUrl: 'js',
    paths: {
        jquery: 'jquery.min'
    }

});

require(['Director', 'Movie'], function (Director, Movie) {
    var fullMetalJacket = new Movie();
    var kubrick = new Director();
    var quotes = ['Cast is everything.', 'Actor are rubbish', 'Lorem ipsum dolor'];
    kubrick.set('name', 'Stanley Kubrick');
    kubrick.set('quotes', quotes);
    fullMetalJacket.set('director', kubrick);
    //console.log(kubrick.get('name'));
    fullMetalJacket.get('director').speak();
    //fukubrick.speak();
    console.log(fullMetalJacket);
    console.log(kubrick);
})

