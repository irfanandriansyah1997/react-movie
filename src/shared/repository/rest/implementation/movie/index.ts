import { MovieRepositoryInterface as Repo } from '../../../movie.repository';
import APIListRequestModel from '../../../../model/api/api-list-request.model';
import APIClientBuilder from '../../../../modules/api/builder/api-client.builder';
import APIDetailRequestModel from '../../../../model/api/api-detail-request.model';
import { ErrorInterface } from '../../../../model/error/interface/model.interface';
import { RootObjectListAPIResponse } from '../../../../generated/api/list-api.interface';
import { RootObjectAPIErrorResponse } from '../../../../generated/api/error-api.interface';
import { RootObjectDetailAPIResponse } from '../../../../generated/api/detail-api.interface';
import MovieListTranslatorHelper from '../../../../model/movie/helper/movie-list-translator.helper';
import MovieDetailTranslatorHelper from '../../../../model/movie/helper/movie-detail-translator.helper';
import {
    APIDetailRequestInterface,
    APIListRequestInterface
} from '../../../../model/api/interface/model.interface';
import {
    MovieListInterface,
    MovieDetailInterface
} from '../../../../model/movie/interface/model.interface';
import {
    API_KEY,
    API_URI
} from '../../../../../env/env.config';

/**
 * Generate Class
 * @author Irfan Andriansyah <irfan@99.co>
 * @description
 * @since 2020.09.17
 */
class MovieRepositoryImplementation implements Repo {
    constructor(
        private apiURI: string,
        private apiKey: string
    ) {
        this.getListMovie = this.getListMovie.bind(this);
        this.getDetailMovie = this.getDetailMovie.bind(
            this
        );
    }

    /**
     * Get List Movie
     * @param {APIListRequestModel} param - api list request
     * @return {Promise<MovieListInterface>}
     */
    public getListMovie(
        param: APIListRequestModel
    ): Promise<MovieListInterface | undefined> {
        const { apiKey, apiURI } = this;

        return new APIClientBuilder<
            | RootObjectListAPIResponse
            | RootObjectAPIErrorResponse,
            APIListRequestInterface,
            MovieListInterface
        >()
            .setApiKey(apiKey)
            .setApiURI(apiURI)
            .setParam(param)
            .setFuncTranslator(
                MovieListTranslatorHelper.translateRESTToMovieList
            )
            .execute()
            .then((response) => {
                if (response) {
                    return {
                        ...response,
                        pagination: {
                            ...response.pagination,
                            page: param.modelValue.page
                        }
                    };
                }
                return response;
            });
    }

    /**
     * Get Detail Movie
     * @param {APIDetailRequestInterface} param - api detail request
     * @return {Promise<MovieDetailInterface>}
     */
    getDetailMovie(
        param: APIDetailRequestModel
    ): Promise<
        MovieDetailInterface | ErrorInterface | undefined
    > {
        const { apiKey, apiURI } = this;

        return new APIClientBuilder<
            | RootObjectDetailAPIResponse
            | RootObjectAPIErrorResponse,
            APIDetailRequestInterface,
            MovieDetailInterface | ErrorInterface
        >()
            .setApiKey(apiKey)
            .setApiURI(apiURI)
            .setParam(param)
            .setFuncTranslator(
                MovieDetailTranslatorHelper.translateRESTToMovieDetail
            )
            .execute();
    }

    /**
     * Singleton Movie Repository
     * @return {Repo}
     */
    public static singleton(): Repo {
        return new MovieRepositoryImplementation(
            API_URI,
            API_KEY
        );
    }
}

export default MovieRepositoryImplementation;
