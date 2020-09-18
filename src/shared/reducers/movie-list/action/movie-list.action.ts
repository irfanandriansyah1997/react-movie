import { Dispatch } from 'redux';
import {
    SET_MOVIE_LIST_KEY,
    UNSET_MOVIE_LIST_KEY
} from '../constant/movie-list.const';
import { MovieListItemInterface } from '../../../model/movie/interface/model.interface';

/**
 * Movie List Action
 * @param {MovieListItemInterface[]} response - movie list card item
 * @return {void}
 */
export const setMovieListAction = (
    response: MovieListItemInterface[]
) => (dispatch: Dispatch): void => {
    dispatch({
        type: SET_MOVIE_LIST_KEY,
        payload: {
            item: response
        }
    });
};

/**
 * Unset Movie List Action
 * @return {void}
 */
export const unsetPaginationAction = () => (
    dispatch: Dispatch
): void => {
    dispatch({
        type: UNSET_MOVIE_LIST_KEY
    });
};
