import MovieFigureModel from '../movie-figure.model';
import { RootObjectDetailAPIResponse } from '../../../generated/api/detail-api.interface';

/**
 * Movie Figure Translator
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.09.17
 */
class MovieFigureTranslatorHelper {
    /**
     * Translate Rest To Movie Figure
     * @param {Object} response - Response API
     */
    public static translateRESTToRatingItem({
        Director,
        Writer,
        Actors
    }: Pick<
        RootObjectDetailAPIResponse,
        'Director' | 'Writer' | 'Actors'
    >): MovieFigureModel {
        return new MovieFigureModel()
            .setDirector(Director)
            .setWritter(Writer)
            .setActors(Actors);
    }
}

export default MovieFigureTranslatorHelper;
