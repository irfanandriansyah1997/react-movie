import {
    SET_PAGINATION_KEY,
    SET_PAGE_KEY,
    UNSET_PAGINATION_KEY
} from '../../constant/pagination.const';
import {
    setPageAction,
    setPaginationAction,
    unsetPaginationAction
} from '../pagination.action';

describe('Testing Pagination Action', () => {
    describe('Testing Invoke Set Page Action', () => {
        it('testing with mock', () => {
            const spy = jest.fn((x) => x);
            setPageAction(1)(spy);

            expect(spy).toHaveBeenCalledTimes(1);
            expect(spy.mock.results[0].value).toStrictEqual(
                {
                    type: SET_PAGE_KEY,
                    payload: {
                        page: 1
                    }
                }
            );
        });
    });

    describe('Testing Invoke Set Pagination Action', () => {
        it('testing with mock', () => {
            const spy = jest.fn((x) => x);
            setPaginationAction({
                page: 1,
                perPage: 10,
                totalPage: 40,
                totalResult: 391
            })(spy);

            expect(spy).toHaveBeenCalledTimes(1);
            expect(spy.mock.results[0].value).toStrictEqual(
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
        });
    });

    describe('Testing Invoke Unset Pagination Action', () => {
        it('testing with mock', () => {
            const spy = jest.fn((x) => x);
            unsetPaginationAction()(spy);

            expect(spy).toHaveBeenCalledTimes(1);
            expect(spy.mock.results[0].value).toStrictEqual(
                {
                    type: UNSET_PAGINATION_KEY
                }
            );
        });
    });
});
