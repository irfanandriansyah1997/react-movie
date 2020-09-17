import MovieListModel from '../movie-list.model';
import MovieListItemTranslatorHelper from './movie-list-item-translator.helper';
import { RootObjectListAPIResponse } from '../../../generated/api/list-api.interface';
import PaginationTranslatorHelper from '../../general/helper/pagination-translator.helper';

/**
 * Movie List Translator
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.09.17
 */
class MovieListTranslatorHelper {
    /**
     * Translate Rest To Movie List
     * @param {number} page - page number
     * @param {number} perPage - per page option
     * @param {Object} response - Response API
     */
    public static translateRESTToMovieList(
        page: number,
        perPage: number,
        { Search, totalResults }: RootObjectListAPIResponse
    ): MovieListModel {
        return new MovieListModel()
            .setItem(
                Search.map(
                    MovieListItemTranslatorHelper.translateRESTToMovieListItem
                )
            )
            .setPagination(
                PaginationTranslatorHelper.translateRESTToPagination(
                    page,
                    perPage,
                    {
                        totalResults
                    }
                )
            );
    }
}

export default MovieListTranslatorHelper;
