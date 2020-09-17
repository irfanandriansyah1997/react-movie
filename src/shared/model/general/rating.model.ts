import RatingItemModel from './rating-item.model';
import ModelAbstract from '../../abstract/model.abstract';
import ValidatorHelper from '../../helper/validator.helper';
import { RatingInterface } from './interface/model.interface';

/**
 * Rating Model
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.09.17
 */
class RatingModel extends ModelAbstract<RatingInterface> {
    private item: RatingItemModel[] = [];

    private value: string = '';

    /**
     * Setter Item
     * @param {RatingItemModel[]} item - item rating
     * @return {this}
     */
    public setItem(item: RatingItemModel[]): this {
        this.item = item;
        return this;
    }

    /**
     * Getter Model Value
     * @return {RatingInterface}
     */
    public get modelValue(): RatingInterface {
        const { item: itemList } = this;
        const formattedItem = itemList.filter(
            ValidatorHelper.verifiedIsNotEmpty
        );

        return {
            item: formattedItem.map(
                ({ modelValue }) => modelValue
            )
        };
    }
}

export default RatingModel;
