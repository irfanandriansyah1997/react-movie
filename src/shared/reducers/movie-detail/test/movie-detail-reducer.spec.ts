import MovieDetailReducers from '..';
import { MovieDetailActionFixture } from '../action/test/fixtures/movie-detail-action-fixture.spec';
import {
    DEFAULT_MOVIE_DETAIL,
    SET_MOVIE_DETAIL_KEY,
    UNSET_MOVIE_DETAIL_KEY
} from '../constant/movie-detail.const';

describe('Testing Movie Detail Reducers', () => {
    describe('Testing Invoke Set Movie Detail Action', () => {
        it('testing with mock', () => {
            const response = MovieDetailReducers(
                {
                    property: DEFAULT_MOVIE_DETAIL
                },
                {
                    type: SET_MOVIE_DETAIL_KEY,
                    payload: (MovieDetailActionFixture as unknown) as Record<
                        string,
                        unknown
                    >
                }
            );

            expect(response).toStrictEqual({
                property: MovieDetailActionFixture
            });
        });
    });

    describe('Testing Invoke Unset Movie Detail Action', () => {
        it('testing with mock', () => {
            const response = MovieDetailReducers(
                {
                    property: MovieDetailActionFixture
                },
                {
                    type: UNSET_MOVIE_DETAIL_KEY,
                    payload: {}
                }
            );

            expect(response).toStrictEqual({
                property: DEFAULT_MOVIE_DETAIL
            });
        });
    });
});
