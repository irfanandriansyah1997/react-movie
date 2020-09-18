import { Dispatch } from 'redux';

import { PaginationInterface } from '../../../model/general/interface/model.interface';
import {
    SET_PAGE_KEY,
    SET_PAGINATION_KEY,
    UNSET_PAGINATION_KEY
} from '../constant/pagination.const';

/**
 * Pagination Action
 * @param {PaginationInterface} pagination - pagination interface
 * @return {void}
 */
export const setPaginationAction = (
    response: PaginationInterface
) => (dispatch: Dispatch): void => {
    dispatch({
        type: SET_PAGINATION_KEY,
        payload: response
    });
};

/**
 * Pagination Action
 * @param {PaginationInterface} pagination - pagination interface
 * @return {void}
 */
export const setPageAction = (response: number) => (
    dispatch: Dispatch
): void => {
    dispatch({
        type: SET_PAGE_KEY,
        payload: {
            page: response
        }
    });
};

/**
 * Unset Pagination Action
 * @return {void}
 */
export const unsetPaginationAction = () => (
    dispatch: Dispatch
): void => {
    dispatch({
        type: UNSET_PAGINATION_KEY
    });
};
