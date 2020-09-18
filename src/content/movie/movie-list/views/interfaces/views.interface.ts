import { PaginationInterface } from '../../../../../shared/model/general/interface/model.interface';
import { MovieListInterface } from '../../../../../shared/model/movie/interface/model.interface';

/**
 * Movie List Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.09.18
 */
export type ViewsPropsInterface = Pick<
    MovieListInterface,
    'item'
> &
    Pick<PaginationInterface, 'totalResult'>;
