import { MovieDetailInterface } from '../../../../../model/movie/interface/model.interface';

test.todo('it is not snowing');

export const MovieDetailActionFixture: MovieDetailInterface = {
    plot:
        'After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from corruption.',
    rated: 'PG-13',
    genre: 'Action, Adventure',
    poster:
        'https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
    runtime: '140 min',
    released: '15 Jun 2005',
    production: 'Warner Bros. Pictures',
    score: {
        imdbRating: '8.2',
        metaScore: '70',
        imdbVotes: '1,277,260'
    },
    ratings: {
        item: [
            {
                source: 'Internet Movie Database',
                value: '8.2/10'
            },
            {
                source: 'Rotten Tomatoes',
                value: '84%'
            },
            {
                source: 'Metacritic',
                value: '70/100'
            }
        ]
    },
    figure: {
        director: 'Christopher Nolan',
        writter:
            'Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)',
        actors:
            'Christian Bale, Michael Caine, Liam Neeson, Katie Holmes'
    },
    title: 'Batman Begins',
    year: '2005',
    id: 'tt0372784',
    type: 'movie'
};
