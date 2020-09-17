import { Rating } from '../../../generated/api/detail-api.interface';
import RatingItemModel from '../rating-item.model';

/**
 * Rating Item Translator
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.09.17
 */
class RatingItemTranslatorHelper {
    /**
     * Translate Rest To Rating Item
     * @param {Object} response - Response API
     */
    public static translateRESTToRatingItem({
        Source,
        Value
    }: Rating): RatingItemModel {
        return new RatingItemModel()
            .setSource(Source)
            .setValue(Value);
    }
}

export default RatingItemTranslatorHelper;
