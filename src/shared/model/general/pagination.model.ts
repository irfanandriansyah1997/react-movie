import { PER_PAGE } from './constant/pagination.const';
import ModelAbstract from '../../abstract/model.abstract';
import { PaginationInterface } from './interface/model.interface';

/**
 * Pagination Model
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.09.17
 */
class PaginationModel extends ModelAbstract<
    PaginationInterface
> {
    private page: number = 1;

    private perPage: number = PER_PAGE;

    private totalPage: number = 0;

    private totalResult: number = 0;

    /**
     * Set page
     * @param {number} page - page value
     */
    public setPage(page: number): this {
        this.page = page;
        return this;
    }

    /**
     * Set perPage
     * @param {number} perPage - perPage value
     */
    public setPerPage(perPage: number): this {
        this.perPage = perPage;
        return this;
    }

    /**
     * Set totalPage
     * @param {number} totalPage - totalPage value
     */
    public setTotalPage(totalPage: number): this {
        this.totalPage = totalPage;
        return this;
    }

    /**
     * Set totalResult
     * @param {number} totalResult - totalResult value
     */
    public setTotalResult(totalResult: number): this {
        this.totalResult = totalResult;
        return this;
    }

    /**
     * Getter Model Value
     * @return {PaginationInterface}
     */
    public get modelValue(): PaginationInterface {
        const {
            page,
            perPage,
            totalPage,
            totalResult
        } = this;

        return {
            page,
            perPage,
            totalPage,
            totalResult
        };
    }
}

export default PaginationModel;
