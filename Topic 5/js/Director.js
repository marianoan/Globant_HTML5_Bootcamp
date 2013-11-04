define(['jquery'], function ($) {
    function Director() {
    //var movieObserver = new Observer;
        this.attributes = [];
        this.speak = function () {
            var $quotes = $('.quotes');
            var length = this.attributes['quotes'].length;
            for (var i = 0; i < length; i++) {
                $quotes.append('<li>' + this.attributes['quotes'][i] + '</li>');
            }
        };
        
        this.set = function (key, value) {
            this.attributes[key] = value;

        };

        this.get = function (key) {
            return this.attributes[key];
        };
    }

    return Director;
});