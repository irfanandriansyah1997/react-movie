import PaginationModel from '../pagination.model';
import StringHelper from '../../../helper/string.helper';
import { RootObjectListAPIResponse } from '../../../generated/api/list-api.interface';

/**
 * Pagination Translator
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.09.17
 */
class PaginationTranslatorHelper {
    /**
     * Translate Rest To Rating Item
     * @param {number} page - page number
     * @param {number} perPage - per page option
     * @param {Object} response - Response API
     */
    public static translateRESTToPagination(
        page: number,
        perPage: number,
        {
            totalResults
        }: Pick<RootObjectListAPIResponse, 'totalResults'>
    ): PaginationModel {
        const result = StringHelper.validateNumberAndParsedToInteger(
            totalResults
        );
        const totalPage = Math.ceil(result / perPage);
        return new PaginationModel()
            .setPage(page)
            .setPerPage(perPage)
            .setTotalPage(totalPage)
            .setTotalResult(result);
    }
}

export default PaginationTranslatorHelper;
