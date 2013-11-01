$(document).ready(function () {
    $button = $('.button');

    $button.on('click', function () {
        var actors;
        var movieObserver = new Observer;

        actors = ['Graham Chapman','Terry Gilliam','Jhon Cleese']
        var montyPythonAndTheHolyGrail = new Movie(movieObserver);

        montyPythonAndTheHolyGrail.set('year', 1975);
        montyPythonAndTheHolyGrail.set('title', 'Monty Python and the Holy Grail');
        montyPythonAndTheHolyGrail.set('actors', actors);

        montyPythonAndTheHolyGrail.play();
        montyPythonAndTheHolyGrail.stop();
        /*console.log(montyPythonAndTheHolyGrail);

        console.log(montyPythonAndTheHolyGrail.get('year'));
        console.log(montyPythonAndTheHolyGrail.get('actors'));*/
    });

})