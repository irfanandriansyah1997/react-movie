import MovieListItemModel from './movie-list-item.model';
import ModelAbstract from '../../abstract/model.abstract';
import PaginationModel from '../general/pagination.model';
import ValidatorHelper from '../../helper/validator.helper';
import { MovieListInterface } from './interface/model.interface';

/**
 * Movie List Model
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.09.17
 */
class MovieListModel extends ModelAbstract<
    MovieListInterface
> {
    private item: MovieListItemModel[] = [];

    private pagination: PaginationModel = new PaginationModel();

    /**
     * Setter Item
     * @param {MovieListItemModel[]} item - movie list item
     * @return {this}
     */
    public setItem(item: MovieListItemModel[]): this {
        this.item = item;
        return this;
    }

    /**
     * Setter Pagination
     * @param {PaginationModel} pagination - pagination model
     * @return {this}
     */
    public setPagination(
        pagination: PaginationModel
    ): this {
        this.pagination = pagination;
        return this;
    }

    /**
     * Getter Model Value
     * @return {MovieListInterface}
     */
    public get modelValue(): MovieListInterface {
        const { item: itemList, pagination } = this;
        const formattedItem = itemList.filter(
            ValidatorHelper.verifiedIsNotEmpty
        );

        return {
            item: formattedItem.map(
                ({ modelValue }) => modelValue
            ),
            pagination: pagination.modelValue
        };
    }
}

export default MovieListModel;
