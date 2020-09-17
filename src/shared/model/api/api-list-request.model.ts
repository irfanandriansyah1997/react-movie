import ModelAbstract from '../../abstract/model.abstract';
import ValidatorHelper from '../../helper/validator.helper';
import { APIListRequestInterface } from './interface/model.interface';

/**
 * API List Request Model
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.09.17
 */
class APIListRequestModel extends ModelAbstract<
    APIListRequestInterface
> {
    private query: string = '';

    /**
     * Setter ID
     * @param {string} ID - id movies
     * @return {this}
     */
    public setQuerySearch(query: string): this {
        this.query = query;
        return this;
    }

    /**
     * Getter Model Value
     * @return {APIListRequestInterface}
     */
    public get modelValue(): APIListRequestInterface {
        const { query: s } = this;

        if (ValidatorHelper.verifiedIsNotEmpty(s)) {
            return {
                s
            };
        }

        throw Error('Set Query Search Not Invoked');
    }
}

export default APIListRequestModel;
