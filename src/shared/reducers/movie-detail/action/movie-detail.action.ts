import { Dispatch } from 'redux';

import { MovieDetailInterface } from '../../../model/movie/interface/model.interface';
import {
    SET_MOVIE_DETAIL_KEY,
    UNSET_MOVIE_DETAIL_KEY
} from '../constant/movie-detail.const';

/**
 * Movie Detail Action
 * @param {MovieDetailInterface} response - movie detail object
 * @return {void}
 */
export const setMovieDetailAction = (
    response: MovieDetailInterface
) => (dispatch: Dispatch): void => {
    dispatch({
        type: SET_MOVIE_DETAIL_KEY,
        payload: response
    });
};

/**
 * Unset Movie Detail Action
 * @return {void}
 */
export const unsetMovieDetailAction = () => (
    dispatch: Dispatch
): void => {
    dispatch({
        type: UNSET_MOVIE_DETAIL_KEY
    });
};
