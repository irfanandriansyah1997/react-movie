import MovieListItemModel from '../movie-list-item.model';
import { Search } from '../../../generated/api/list-api.interface';
import { MovieType } from '../../../interface/movie-type.interface';

/**
 * Movie List Item Translator
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.09.17
 */
class MovieListItemTranslatorHelper {
    /**
     * Translate Rest To Movie List Item
     * @param {Object} response - Response API
     */
    public static translateRESTToMovieListItem({
        Poster,
        Title,
        Type,
        Year,
        imdbID
    }: Search): MovieListItemModel {
        return new MovieListItemModel()
            .setId(imdbID)
            .setPoster(Poster)
            .setTitle(Title)
            .setType(Type as MovieType)
            .setYear(Year);
    }
}

export default MovieListItemTranslatorHelper;
