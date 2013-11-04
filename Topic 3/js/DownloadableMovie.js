var DownloadableMovie = (function (Movie, Observer) {
    
    Observer.subscribe(function (title) {
        console.log('Downloading: ' + title);
    }, 'downloading');

    Movie.download = function () {
        Observer.publish([Movie.get('title')], 'downloading');
    };

    return Movie;

}(Movie, Observer));