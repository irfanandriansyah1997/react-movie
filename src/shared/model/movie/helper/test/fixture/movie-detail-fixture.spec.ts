import { RootObjectDetailAPIResponse } from '../../../../../generated/api/detail-api.interface';

test.todo('it is not snowing');

export const MoviedetailAPIFixture: RootObjectDetailAPIResponse = {
    Title: 'Batman Begins',
    Year: '2005',
    Rated: 'PG-13',
    Released: '15 Jun 2005',
    Runtime: '140 min',
    Genre: 'Action, Adventure',
    Director: 'Christopher Nolan',
    Writer:
        'Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)',
    Actors:
        'Christian Bale, Michael Caine, Liam Neeson, Katie Holmes',
    Plot:
        'After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from corruption.',
    Language: 'English, Mandarin',
    Country: 'USA, UK',
    Awards:
        'Nominated for 1 Oscar. Another 14 wins & 72 nominations.',
    Poster:
        'https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
    Ratings: [
        {
            Source: 'Internet Movie Database',
            Value: '8.2/10'
        },
        {
            Source: 'Rotten Tomatoes',
            Value: '84%'
        },
        {
            Source: 'Metacritic',
            Value: '70/100'
        }
    ],
    Metascore: '70',
    imdbRating: '8.2',
    imdbVotes: '1,277,260',
    imdbID: 'tt0372784',
    Type: 'movie',
    DVD: '18 Oct 2005',
    BoxOffice: '$204,100,000',
    Production: 'Warner Bros. Pictures',
    Website: 'N/A',
    Response: 'True'
};
