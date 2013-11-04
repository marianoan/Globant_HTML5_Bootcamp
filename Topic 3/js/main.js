$(document).ready(function () {
    $button = $('.button');

    $button.on('click', function () {
        var actors = Actors;
        //var movieObserver = new Observer;
        asSocial.call(Movie.prototype);

        actors.add('Graham Chapman');
        actors.add('Terry Gilliam');
        actors.add('Jhon Cleese');

        //actors = ['Graham Chapman','Terry Gilliam','Jhon Cleese']
        var montyPythonAndTheHolyGrail = Movie;
        
        
        montyPythonAndTheHolyGrail.set('year', 1975);
        montyPythonAndTheHolyGrail.set('title', 'Monty Python and the Holy Grail');
        montyPythonAndTheHolyGrail.set('actors', actors);

        montyPythonAndTheHolyGrail.play();
        montyPythonAndTheHolyGrail.stop();
        montyPythonAndTheHolyGrail.download();
        montyPythonAndTheHolyGrail.share('Pepe');
        console.log(montyPythonAndTheHolyGrail);

        console.log(montyPythonAndTheHolyGrail.get('year'));
        console.log(montyPythonAndTheHolyGrail.get('actors').get());

        actors.unset();
        actors.add('George Clooney');
        actors.add('Sandra Bullock');
        //actors = ['George Clooney', 'Sandra Bullock']
        var gravity = Movie;
        gravity.set('year', 2013);
        gravity.set('title', 'Gravity');
        gravity.set('actors', actors);

        gravity.play();
        gravity.stop();
        gravity.like();

        console.log(gravity);

        console.log(gravity.get('year'));
        console.log(gravity.get('actors'));
    });

})