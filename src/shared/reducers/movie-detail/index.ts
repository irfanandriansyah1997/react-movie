import { Reducer } from 'react';
import { MovieDetailInterface } from '../../model/movie/interface/model.interface';
import { MovieDetailReducerInterface } from './interfaces/movie-detail-reducer.interface';
import { ReducerActionParamInterface } from '../../modules/redux/interfaces/redux-action.interface';
import {
    DEFAULT_MOVIE_DETAIL,
    SET_MOVIE_DETAIL_KEY,
    UNSET_MOVIE_DETAIL_KEY
} from './constant/movie-detail.const';

/**
 * Movie Detail Reducers
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.09.18
 */
const MovieDetailReducers: Reducer<
    MovieDetailReducerInterface,
    ReducerActionParamInterface
> = (
    state: MovieDetailReducerInterface = {
        property: DEFAULT_MOVIE_DETAIL
    },
    action: ReducerActionParamInterface
): MovieDetailReducerInterface => {
    switch (action.type) {
        case SET_MOVIE_DETAIL_KEY:
            return {
                ...state,
                property: (action.payload as unknown) as MovieDetailInterface
            };
        case UNSET_MOVIE_DETAIL_KEY:
            return {
                property: DEFAULT_MOVIE_DETAIL
            };
        default:
            return state;
    }
};

export default MovieDetailReducers;
