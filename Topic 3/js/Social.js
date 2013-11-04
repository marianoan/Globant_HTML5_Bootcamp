var asSocial = (function (Movie) {
    function share(name) {
        console.log('Sharing ' + this.get('title') +  ' with ' +  name);
    };

        function like() {
        console.log('Like this movie');
    };

    return function () {
        Movie.share = share;
        Movie.like = like;
        return Movie;
    };
}(Movie));