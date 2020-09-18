import Repo from '../../../index';
import { MovieListCorrectFixture } from './fixtures/movie-list-correct.fixture';
import APIListRequestModel from '../../../../../model/api/api-list-request.model';
import { MovieDetailCorrectFixture } from './fixtures/movie-detail-correct.fixture';
import APIDetailRequestModel from '../../../../../model/api/api-detail-request.model';

describe('Testing Movie Repository', () => {
    describe('Testing Get Data List Movie', () => {
        it('testing with correct parameter', (done: () => void) => {
            const param = new APIListRequestModel()
                .setPage(1)
                .setQuerySearch('Batman');

            Repo.MovieRepository()
                .getListMovie(param)
                .then((data) => {
                    expect(data).toStrictEqual(
                        MovieListCorrectFixture
                    );
                    done();
                });
        });

        it('testing with wrong parameter', (done: () => void) => {
            const param = new APIListRequestModel()
                .setPage(1001)
                .setQuerySearch('Batma');

            Repo.MovieRepository()
                .getListMovie(param)
                .then((data) => {
                    expect(data).toStrictEqual({
                        item: [],
                        pagination: {
                            page: 1001,
                            perPage: 10,
                            totalPage: 0,
                            totalResult: 0
                        }
                    });
                    done();
                });
        });
    });

    describe('Testing Get Data Detail Movie', () => {
        it('testing with wrong parameter', (done: () => void) => {
            const param = new APIDetailRequestModel().setID(
                'tt03727841241f'
            );

            Repo.MovieRepository()
                .getDetailMovie(param)
                .then((data) => {
                    expect(data).toStrictEqual({
                        error: true,
                        message: 'Data Not Found'
                    });
                    done();
                });
        });

        it('testing with correct parameter', (done: () => void) => {
            const param = new APIDetailRequestModel().setID(
                'tt0372784'
            );

            Repo.MovieRepository()
                .getDetailMovie(param)
                .then((data) => {
                    expect(data).toStrictEqual(
                        MovieDetailCorrectFixture
                    );
                    done();
                });
        });
    });
});
