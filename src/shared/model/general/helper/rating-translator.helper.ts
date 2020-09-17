import RatingModel from '../rating.model';
import RatingItemTranslatorHelper from './rating-item-translator.helper';
import { RootObjectDetailAPIResponse } from '../../../generated/api/detail-api.interface';

/**
 * Rating Translator
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.09.17
 */
class RatingTranslatorHelper {
    /**
     * Translate Rest To Rating
     * @param {Object} response - Response API
     */
    public static translateRESTToRating({
        Ratings
    }: Pick<
        RootObjectDetailAPIResponse,
        'Ratings'
    >): RatingModel {
        return new RatingModel().setItem(
            Ratings.map(
                RatingItemTranslatorHelper.translateRESTToRatingItem
            )
        );
    }
}

export default RatingTranslatorHelper;
