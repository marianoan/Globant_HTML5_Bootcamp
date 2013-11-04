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
            attributes[key] = value;

        },

        get: function (key) {
            return attributes[key];
        },
    }

    

}(Observer));