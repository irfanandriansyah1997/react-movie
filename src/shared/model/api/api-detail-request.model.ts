import ModelAbstract from '../../abstract/model.abstract';
import ValidatorHelper from '../../helper/validator.helper';
import { APIDetailRequestInterface } from './interface/model.interface';

/**
 * API Detail Request Model
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.09.17
 */
class APIDetailRequestModel extends ModelAbstract<
    APIDetailRequestInterface
> {
    private ID: string = '';

    /**
     * Setter ID
     * @param {string} ID - id movies
     * @return {this}
     */
    public setID(ID: string): this {
        this.ID = ID;
        return this;
    }

    /**
     * Getter Model Value
     * @return {APIDetailRequestInterface}
     */
    public get modelValue(): APIDetailRequestInterface {
        const { ID: i } = this;

        if (ValidatorHelper.verifiedIsNotEmpty(i)) {
            return {
                i
            };
        }

        throw Error('Data Not Completed');
    }
}

export default APIDetailRequestModel;
