import PaginationReducers from '..';

import {
    DEFAULT_PAGINATION,
    SET_PAGE_KEY,
    SET_PAGINATION_KEY,
    UNSET_PAGINATION_KEY
} from '../constant/pagination.const';

describe('Testing Movie Detail Reducers', () => {
    describe('Testing Invoke Set Page Key Action', () => {
        it('testing with mock', () => {
            const response = PaginationReducers(
                DEFAULT_PAGINATION,
                {
                    type: SET_PAGE_KEY,
                    payload: {
                        page: 5
                    }
                }
            );

            expect(response).toStrictEqual({
                pagination: {
                    ...DEFAULT_PAGINATION.pagination,
                    page: 5
                }
            });
        });
    });

    describe('Testing Invoke Set Pagination Key Action', () => {
        it('testing with mock', () => {
            const response = PaginationReducers(
                DEFAULT_PAGINATION,
                {
                    type: SET_PAGINATION_KEY,
                    payload: {
                        page: 1,
                        perPage: 10,
                        totalPage: 40,
                        totalResult: 391
                    }
                }
            );

            expect(response).toStrictEqual({
                pagination: {
                    page: 1,
                    perPage: 10,
                    totalPage: 40,
                    totalResult: 391
                }
            });
        });
    });

    describe('Testing Invoke Unset Movie Detail Action', () => {
        it('testing with mock', () => {
            const response = PaginationReducers(
                {
                    pagination: {
                        page: 1,
                        perPage: 10,
                        totalPage: 40,
                        totalResult: 391
                    }
                },
                {
                    type: UNSET_PAGINATION_KEY,
                    payload: {}
                }
            );

            expect(response).toStrictEqual({
                ...DEFAULT_PAGINATION
            });
        });
    });
});
