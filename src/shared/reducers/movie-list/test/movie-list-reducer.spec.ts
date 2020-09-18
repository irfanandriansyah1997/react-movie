import MovieListReducers from '..';
import { MovieListActionFixture } from '../action/test/fixtures/movie-list-action-fixture.spec';
import {
    DEFAULT_MOVIE_LIST,
    SET_MOVIE_LIST_KEY,
    UNSET_MOVIE_LIST_KEY
} from '../constant/movie-list.const';

describe('Testing Movie Detail Reducers', () => {
    describe('Testing Invoke Set Movie Detail Action', () => {
        it('testing with mock', () => {
            const response = MovieListReducers(
                {
                    item: DEFAULT_MOVIE_LIST
                },
                {
                    type: SET_MOVIE_LIST_KEY,
                    payload: {
                        item: MovieListActionFixture
                    }
                }
            );

            expect(response).toStrictEqual({
                item: MovieListActionFixture
            });
        });
    });

    describe('Testing Invoke Unset Movie Detail Action', () => {
        it('testing with mock', () => {
            const response = MovieListReducers(
                {
                    item: MovieListActionFixture
                },
                {
                    type: UNSET_MOVIE_LIST_KEY,
                    payload: {}
                }
            );

            expect(response).toStrictEqual({
                item: DEFAULT_MOVIE_LIST
            });
        });
    });
});
