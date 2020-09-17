import { MovieType } from '../../../interface/movie-type.interface';
import {
    ScoreInterface,
    RatingInterface
} from '../../general/interface/model.interface';

/**
 * Movie List Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.09.17
 */
export interface MovieListInterface {
    title: string;
    year: string;
    id: string;
    type: MovieType;
    poster: string;
}

/**
 * Movie Detail Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.09.17
 */
export type MovieDetailInterface = MovieListInterface & {
    plot: string;
    rated: string;
    genre: string;
    poster: string;
    runtime: string;
    released: string;
    production: string;
    score: ScoreInterface;
    ratings: RatingInterface;
    figure: MovieFigureInterface;
};

/**
 * Movie Figure Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.09.17
 */
export interface MovieFigureInterface {
    director: string;
    writter: string;
    actors: string;
}
