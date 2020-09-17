import APIListRequestModel from '../model/api/api-list-request.model';
import APIDetailRequestModel from '../model/api/api-detail-request.model';

import {
    MovieListInterface,
    MovieDetailInterface
} from '../model/movie/interface/model.interface';

/**
 * Movie Repository
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.09.17
 */
export interface MovieRepositoryInterface {
    getListMovie(
        param: APIListRequestModel
    ): Promise<MovieListInterface | undefined>;
    getDetailMovie(
        param: APIDetailRequestModel
    ): Promise<MovieDetailInterface | undefined>;
}
