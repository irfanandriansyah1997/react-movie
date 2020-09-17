import ModelAbstract from '../../abstract/model.abstract';
import ValidatorHelper from '../../helper/validator.helper';
import { RatingItemInterface } from './interface/model.interface';

/**
 * Rating Item Model
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.09.17
 */
class RatingItemModel extends ModelAbstract<
    RatingItemInterface
> {
    private source: string = '';

    private value: string = '';

    /**
     * Setter Source
     * @param {string} source - source rating
     * @return {this}
     */
    public setSource(source: string): this {
        this.source = source;
        return this;
    }

    /**
     * Setter Value
     * @param {string} source - value rating
     * @return {this}
     */
    public setValue(value: string): this {
        this.value = value;
        return this;
    }

    /**
     * Getter Model Value
     * @return {RatingItemInterface}
     */
    public get modelValue(): RatingItemInterface {
        const { source, value } = this;

        if (
            ValidatorHelper.bulkVerifiedIsNotEmpty([
                source,
                value
            ])
        ) {
            return {
                source,
                value
            };
        }

        throw Error('Data Not Completed');
    }
}

export default RatingItemModel;
