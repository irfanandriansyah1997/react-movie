import MovieListModel from '../movie-list.model';
import MovieListItemTranslatorHelper from './movie-list-item-translator.helper';
import { RootObjectListAPIResponse } from '../../../generated/api/list-api.interface';
import PaginationTranslatorHelper from '../../general/helper/pagination-translator.helper';
import { RootObjectAPIErrorResponse } from '../../../generated/api/error-api.interface';
import { PER_PAGE } from '../../general/constant/pagination.const';
import PaginationModel from '../../general/pagination.model';

const {
    translateRESTToMovieListItem
} = MovieListItemTranslatorHelper;
const {
    translateRESTToPagination
} = PaginationTranslatorHelper;

/**
 * Movie List Translator
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.09.17
 */
class MovieListTranslatorHelper {
    /**
     * Translate Rest To Movie List
     * @param {Object} response - Response API
     */
    public static translateRESTToMovieList({
        Response,
        ...res
    }:
        | RootObjectAPIErrorResponse
        | RootObjectListAPIResponse): MovieListModel {
        if (Response === 'True') {
            const { Search, totalResults } = res as Omit<
                RootObjectListAPIResponse,
                'Response'
            >;

            return new MovieListModel()
                .setItem(
                    Search.map(translateRESTToMovieListItem)
                )
                .setPagination(
                    translateRESTToPagination(1, PER_PAGE, {
                        totalResults
                    })
                );
        }

        return new MovieListModel()
            .setItem([])
            .setPagination(new PaginationModel());
    }
}

export default MovieListTranslatorHelper;
