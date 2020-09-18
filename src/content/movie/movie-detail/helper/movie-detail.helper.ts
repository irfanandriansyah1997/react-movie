import RepositoryRestAPIService from '../../../../shared/repository/rest';
import APIDetailRequestModel from '../../../../shared/model/api/api-detail-request.model';
import { MovieDetailInterface } from '../../../../shared/model/movie/interface/model.interface';
import { ErrorInterface } from '../../../../shared/model/error/interface/model.interface';

/**
 * Movie Detail Helper
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.09.18
 */
class MovieDetailHelper {
    /**
     * Fetch API Movie Detail
     * @param {string} id - movie id
     * @return {Promise<MovieDetailInterface | ErrorInterface | undefined>}
     */
    public static async fetchAPI(
        movieID: string
    ): Promise<
        MovieDetailInterface | ErrorInterface | undefined
    > {
        const param = MovieDetailHelper.generateParameter(
            movieID
        );
        const repo = RepositoryRestAPIService.MovieRepository();
        const response = await repo.getDetailMovie(param);

        return response;
    }

    /**
     * Generate Parameter API
     * @param {string} id - movie id
     * @return {APIDetailRequestModel}
     */
    private static generateParameter(
        movieID: string
    ): APIDetailRequestModel {
        return new APIDetailRequestModel().setID(movieID);
    }
}

export default MovieDetailHelper;
