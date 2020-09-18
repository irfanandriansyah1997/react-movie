import { MovieDetailInterface } from '../../../model/movie/interface/model.interface';

export const SET_MOVIE_DETAIL_KEY = 'SET_MOVIE_DETAIL';

export const UNSET_MOVIE_DETAIL_KEY = 'UNSET_MOVIE_DETAIL';

export const DEFAULT_MOVIE_DETAIL: MovieDetailInterface = {
    figure: {
        actors: '',
        director: '',
        writter: ''
    },
    genre: '',
    id: '',
    plot: '',
    poster: '',
    production: '',
    rated: '',
    ratings: {
        item: []
    },
    released: '',
    runtime: '',
    score: {
        imdbRating: '',
        imdbVotes: '',
        metaScore: ''
    },
    title: '',
    type: 'movie',
    year: ''
};
