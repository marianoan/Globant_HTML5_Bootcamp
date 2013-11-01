var Movie = (function (movieObserver) {

    //var movieObserver = new Observer;
    var attributes = [
        actors = []
    ];

    movieObserver.subscribe(function (title) {
        console.log('Playing: ' + title);
    }, 'playing');

    movieObserver.subscribe(function (title) {
        console.log('Stoping: ' + title);
    }, 'stoping');
    

    //paper.subscribe(joe.sundayPreNap, 'monthly');

    return {
        play: function () {
            movieObserver.publish([this.get('title')], 'playing');
        },

        stop: function () {
            movieObserver.publish([this.get('title')], 'stoping');
        },

        set: function (key, value) {

            if (key.localeCompare('actors')) {
                attributes[key] = value;
            } else {
                attributes[actors] = value;
            }

        },

        get: function (key) {
            if (key.localeCompare('actors')) {
                return attributes[key];
            } else {
                return attributes[actors];
            }
        },
    }

    

});