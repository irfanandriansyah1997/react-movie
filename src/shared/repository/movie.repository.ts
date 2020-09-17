import APIListRequestModel from '../model/api/api-list-request.model';
import { APIDetailRequestInterface } from '../model/api/interface/model.interface';

/**
 * Movie Repository
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.09.17
 */
export interface MovieRepositoryInterface {
    getListMovie(param: APIListRequestModel): Promise<{}>;
    getDetailMovie(
        param: APIDetailRequestInterface
    ): Promise<{}>;
}
