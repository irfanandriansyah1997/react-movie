import ScoreModel from '../score.model';
import { RootObjectDetailAPIResponse } from '../../../generated/api/detail-api.interface';

/**
 * Score Translator
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.09.17
 */
class ScoreTranslatorHelper {
    /**
     * Translate Rest To Score
     * @param {Object} response - Response API
     */
    public static translateRESTToScore({
        Metascore,
        imdbVotes,
        imdbRating
    }: Pick<
        RootObjectDetailAPIResponse,
        'Metascore' | 'imdbRating' | 'imdbVotes'
    >): ScoreModel {
        return new ScoreModel()
            .setMetaScore(Metascore)
            .setImdbRating(imdbRating)
            .setImdbVotes(imdbVotes);
    }
}

export default ScoreTranslatorHelper;
