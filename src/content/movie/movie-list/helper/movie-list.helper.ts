import APIListRequestModel from '../../../../shared/model/api/api-list-request.model';
import { MovieListInterface } from '../../../../shared/model/movie/interface/model.interface';
import RepositoryRestAPIService from '../../../../shared/repository/rest';

/**
 * Movie List Helper
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.09.18
 */
class MovieListHelper {
    /**
     * Fetch API Movie List
     * @param {number} page - page number
     * @param {string} querySearch - query search
     * @return {Promise<MovieListInterface | undefined>}
     */
    public static async fetchAPI(
        page: number,
        querySearch: string
    ): Promise<MovieListInterface | undefined> {
        const param = MovieListHelper.generateParameter(
            page,
            querySearch
        );
        const repo = RepositoryRestAPIService.MovieRepository();
        const response = await repo.getListMovie(param);

        return response;
    }

    /**
     * Generate Parameter API
     * @param {number} page - page number
     * @param {string} querySearch - query search
     * @return {APIListRequestModel}
     */
    private static generateParameter(
        page: number,
        querySearch: string
    ): APIListRequestModel {
        return new APIListRequestModel()
            .setPage(page)
            .setQuerySearch(querySearch);
    }
}

export default MovieListHelper;
