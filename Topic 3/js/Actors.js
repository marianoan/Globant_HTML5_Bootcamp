var Actors = (function () {
    var actors = [];


    return {
        add: function (name) {
            actors.push(name);
        },

        fire: function (name) {
            var index = actors.indexOf(name);
            if (index > -1) {
                actors.splice(index, 1);
            }
        },

        get: function () {
            return actors;
        },

        unset: function () {
            actors = [];
        },
    }

}());