import { MovieDetailActionFixture } from './fixtures/movie-detail-action-fixture.spec';
import {
    SET_MOVIE_DETAIL_KEY,
    UNSET_MOVIE_DETAIL_KEY
} from '../../constant/movie-detail.const';
import {
    setMovieDetailAction,
    unsetMovieDetailAction
} from '../movie-detail.action';

describe('Testing Movie Detail Action', () => {
    describe('Testing Invoke Set Movie Detail Action', () => {
        it('testing with mock', () => {
            const spy = jest.fn((x) => x);
            setMovieDetailAction(MovieDetailActionFixture)(
                spy
            );

            expect(spy).toHaveBeenCalledTimes(1);
            expect(spy.mock.results[0].value).toStrictEqual(
                {
                    type: SET_MOVIE_DETAIL_KEY,
                    payload: MovieDetailActionFixture
                }
            );
        });
    });

    describe('Testing Invoke Unset Movie Detail Action', () => {
        it('testing with mock', () => {
            const spy = jest.fn((x) => x);
            unsetMovieDetailAction()(spy);

            expect(spy).toHaveBeenCalledTimes(1);
            expect(spy.mock.results[0].value).toStrictEqual(
                {
                    type: UNSET_MOVIE_DETAIL_KEY
                }
            );
        });
    });
});
