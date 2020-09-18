import { MovieListItemInterface } from '../../../../../shared/model/movie/interface/model.interface';

/**
 * Movie List Context Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.09.18
 */
export interface MovieListContextInterface {
    query: string;
    activeMovie: MovieListItemInterface;
    setQuery(query: string): void;
    setActiveMovie(movie: MovieListItemInterface): void;
}
