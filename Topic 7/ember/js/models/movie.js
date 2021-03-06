﻿Movies.Movie = DS.Model.extend({
    name: DS.attr('string'),
    year: DS.attr('string'),
    director: DS.attr('string'),
    img: DS.attr('string'),
    cast: DS.attr('string'),
    sinopsis: DS.attr('string'),
});

Movies.Movie.FIXTURES = [
    {
        id: 1,
        name: "The Italian Job",
        year: "1969",
        director: "Peter Collinson",
        img: "http:\/\/ia.media-imdb.com/images/M/MV5BNTI1ODYwNzg3Nl5BMl5BanBnXkFtZTcwMDYzMjk3OA@@._V1_SX214_.jpg",
        cast: "Michael Caine, Noel Coward, Benny Hill",
        sinopsis: "Charlie's got a 'Job' to do. Having just left prison, he finds one of his friends has attempted a high risk job in Italy right under the nose of the Mafia. Charlie's friend doesn't get very far so Charlie takes over the 'Job'. Using three Mini Coopers, a couple of Jaguars and a bus, he hopes to bring Torino to a standstill, steal the Gold and escape."
    },
    {
        id: 2,
        name: "Monty Python and the Holy Grail",
        year: "1975",
        director: "Terry Gilliam, Terry Jones",
        img: "http:\/\/ia.media-imdb.com/images/M/MV5BMTkzODczMTgwM15BMl5BanBnXkFtZTYwNTAwODI5._V1_SX214_.jpg",
        cast: "Graham Chapman, John Cleese, Eric Idle, Terry Gilliam, Terry Jones",
        sinopsis: "The movie starts out with Arthur, King of the Britons, looking for knights to sit with him at Camelot. He finds many knights including Sir Galahad the pure, Sir Lancelot the brave, the quiet Sir Bedevere, and Sir Robin the Not-Quite-So-Brave-as-Sir Lancelot. They do not travel on horses, but pretend they do and have their servants bang coconuts to make the sound of horse's hooves. Through satire of certain events in history (witch trials, the black plague) they find Camelot, but after literally a quick song and dance they decide that they do not want to go there. While walking away, God (who seems to be grumpy) come to them from a cloud and tells them to find the Holy Grail. They agree and begin their search. While they search for the Grail, scenes of the knight's tales appear and why they have the name they have. Throughout their search they meet interesting people and knights along the way. Most of the characters die; some through a killer rabbit (which they defeat with the holy hand grenade), others from not answering a question right from the bridge of Death, or die some other ridiculous way. In the end, King Arthur and Sir Bedevere are left and find the Castle Arrrghhh where the Holy Grail is. They are met by some French soldiers who taunted them earlier in the film, so they were not able to get into the castle."
    }
];