import { MovieListActionFixture } from './fixtures/movie-list-action-fixture.spec';
import {
    SET_MOVIE_LIST_KEY,
    UNSET_MOVIE_LIST_KEY
} from '../../constant/movie-list.const';
import {
    setMovieListAction,
    unsetMovieListAction
} from '../movie-list.action';

describe('Testing Movie List Action', () => {
    describe('Testing Invoke Set Movie List Action', () => {
        it('testing with mock', () => {
            const spy = jest.fn((x) => x);
            setMovieListAction(MovieListActionFixture)(spy);

            expect(spy).toHaveBeenCalledTimes(1);
            expect(spy.mock.results[0].value).toStrictEqual(
                {
                    type: SET_MOVIE_LIST_KEY,
                    payload: {
                        item: MovieListActionFixture
                    }
                }
            );
        });
    });

    describe('Testing Invoke Unset Movie List Action', () => {
        it('testing with mock', () => {
            const spy = jest.fn((x) => x);
            unsetMovieListAction()(spy);

            expect(spy).toHaveBeenCalledTimes(1);
            expect(spy.mock.results[0].value).toStrictEqual(
                {
                    type: UNSET_MOVIE_LIST_KEY
                }
            );
        });
    });
});
