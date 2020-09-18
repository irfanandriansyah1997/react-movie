import { Reducer } from 'react';
import { MovieListItemInterface } from '../../model/movie/interface/model.interface';
import { MovieListReducerInterface } from './interfaces/movie-list-reducer.interface';
import { ReducerActionParamInterface } from '../../modules/redux/interfaces/redux-action.interface';
import {
    DEFAULT_MOVIE_LIST,
    SET_MOVIE_LIST_KEY,
    UNSET_MOVIE_LIST_KEY
} from './constant/movie-list.const';

/**
 * Movie List Reducers
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.09.18
 */
const MovieListReducers: Reducer<
    MovieListReducerInterface,
    ReducerActionParamInterface
> = (
    state: MovieListReducerInterface = {
        item: DEFAULT_MOVIE_LIST
    },
    action
): MovieListReducerInterface => {
    switch (action.type) {
        case SET_MOVIE_LIST_KEY:
            return {
                ...state,
                item: [
                    ...state.item,
                    ...((action.payload
                        .item as unknown) as MovieListItemInterface[])
                ]
            };
        case UNSET_MOVIE_LIST_KEY:
            return {
                item: DEFAULT_MOVIE_LIST
            };
        default:
            return state;
    }
};

export default MovieListReducers;
