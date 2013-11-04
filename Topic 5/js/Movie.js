
define(['Director'], function (director) {
    function Movie() {
        //var movieObserver = new Observer;
        this.attributes = [];
        this.play = function () {
        };

        this.stop = function () {
        };

        this.set = function (key, value) {
            this.attributes[key] = value;
        };

        this.get = function (key) {
            return this.attributes[key];
        };
        };
    return Movie;
});