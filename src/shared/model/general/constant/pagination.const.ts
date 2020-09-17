import { PaginationInterface } from '../interface/model.interface';

export const PER_PAGE = 10;

export const DEFAULT_PAGINATION: PaginationInterface = {
    page: 1,
    perPage: 10,
    totalPage: 0,
    totalResult: 0
};
