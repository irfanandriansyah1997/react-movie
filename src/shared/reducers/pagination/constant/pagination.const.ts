import { PaginationReducerInterface } from '../interfaces/pagination-reducer.interface';
import { DEFAULT_PAGINATION as DEFAULT_VALUE } from '../../../model/general/constant/pagination.const';

export const SET_PAGE_KEY = 'SET_PAGE';

export const SET_PAGINATION_KEY = 'SET_PAGINATION';

export const UNSET_PAGINATION_KEY = 'UNSET_PAGINATION';

export const DEFAULT_PAGINATION: PaginationReducerInterface = {
    pagination: DEFAULT_VALUE
};
