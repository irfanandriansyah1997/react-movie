import { Reducer } from 'react';

import { PaginationInterface } from '../../model/general/interface/model.interface';
import { PaginationReducerInterface } from './interfaces/pagination-reducer.interface';
import { ReducerActionParamInterface } from '../../modules/redux/interfaces/redux-action.interface';
import {
    DEFAULT_PAGINATION,
    SET_PAGINATION_KEY,
    UNSET_PAGINATION_KEY
} from './constant/pagination.const';

/**
 * Pagination Reducers
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.09.18
 */
const PaginationReducers: Reducer<
    PaginationReducerInterface,
    ReducerActionParamInterface
> = (
    state: PaginationReducerInterface = DEFAULT_PAGINATION,
    action: ReducerActionParamInterface
): PaginationReducerInterface => {
    switch (action.type) {
        case SET_PAGINATION_KEY:
            return {
                ...state,
                pagination: (action.payload as unknown) as PaginationInterface
            };
        case UNSET_PAGINATION_KEY:
            return DEFAULT_PAGINATION;
        default:
            return state;
    }
};

export default PaginationReducers;
