import ModelAbstract from '../../abstract/model.abstract';
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

    private page: number = 1;

    /**
     * Setter ID
     * @param {string} query - query search movies
     * @return {this}
     */
    public setQuerySearch(query: string): this {
        this.query = query;
        return this;
    }

    /**
     * Setter Page
     * @param {string} page - page number
     * @return {this}
     */
    public setPage(page: number): this {
        this.page = page;
        return this;
    }

    /**
     * Getter Model Value
     * @return {APIListRequestInterface}
     */
    public get modelValue(): APIListRequestInterface {
        const { query: s, page } = this;

        return {
            s,
            page
        };
    }
}

export default APIListRequestModel;
