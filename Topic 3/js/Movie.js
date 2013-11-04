var Movie = (function (Observer) {
    //var movieObserver = new Observer;
    var attributes = [];

    Observer.subscribe(function (title) {
        console.log('Playing: ' + title);
    }, 'playing');

    Observer.subscribe(function (title) {
        console.log('Stoping: ' + title);
    }, 'stoping');
    


    return {
        play: function () {
            Observer.publish([this.get('title')], 'playing');
        },

        stop: function () {
            Observer.publish([this.get('title')], 'stoping');
        },

        set: function (key, value) {

            if (key.localeCompare('actors')) {
                attributes[key] = value;
            } else {
                attributes['actors'] = value;
            }

        },

        get: function (key) {
            if (key.localeCompare('actors')) {
                return attributes[key];
            } else {
                return attributes['actors'];
            }
        },
    }

    

}(Observer));