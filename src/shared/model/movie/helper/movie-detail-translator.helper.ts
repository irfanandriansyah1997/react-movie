import MovieDetailModel from '../movie-detail.model';
import { MovieType } from '../../../interface/movie-type.interface';
import MovieFigureTranslatorHelper from './movie-figure-translator.helper';
import ScoreTranslatorHelper from '../../general/helper/score-translator.helper';
import RatingTranslatorHelper from '../../general/helper/rating-translator.helper';
import { RootObjectDetailAPIResponse } from '../../../generated/api/detail-api.interface';
import { RootObjectAPIErrorResponse } from '../../../generated/api/error-api.interface';
import ErrorModel from '../../error/error.model';

/**
 * Movie Detail Translator
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.09.17
 */
class MovieDetailTranslatorHelper {
    /**
     * Translate Rest To Movie Detail
     * @param {Object} response - Response API
     */
    public static translateRESTToMovieDetail(
        response:
            | RootObjectAPIErrorResponse
            | RootObjectDetailAPIResponse
    ): MovieDetailModel | ErrorModel {
        const { Response, ...res } = response;
        if (Response === 'True') {
            const {
                Title,
                Year,
                imdbID,
                Type,
                Plot,
                Rated,
                Genre,
                Poster,
                Runtime,
                Released,
                Production,
                Metascore,
                imdbVotes,
                imdbRating,
                Ratings,
                Director,
                Actors,
                Writer
            } = res as Omit<
                RootObjectDetailAPIResponse,
                'Response'
            >;

            return new MovieDetailModel()
                .setTitle(Title)
                .setYear(Year)
                .setId(imdbID)
                .setType(Type as MovieType)
                .setPlot(Plot)
                .setRated(Rated)
                .setGenre(Genre)
                .setPoster(Poster)
                .setRuntime(Runtime)
                .setReleased(Released)
                .setProduction(Production)
                .setScore(
                    ScoreTranslatorHelper.translateRESTToScore(
                        {
                            Metascore,
                            imdbRating,
                            imdbVotes
                        }
                    )
                )
                .setRatings(
                    RatingTranslatorHelper.translateRESTToRating(
                        { Ratings }
                    )
                )
                .setFigure(
                    MovieFigureTranslatorHelper.translateRESTToRatingItem(
                        {
                            Actors,
                            Director,
                            Writer
                        }
                    )
                );
        }

        return new ErrorModel()
            .setError(true)
            .setMessage('Data Not Found');
    }
}

export default MovieDetailTranslatorHelper;
