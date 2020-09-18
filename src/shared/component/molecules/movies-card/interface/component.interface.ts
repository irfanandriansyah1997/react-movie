import { MovieListItemInterface } from '../../../../model/movie/interface/model.interface';
import { CardPropsInterface } from '../../../atomic/card/interface/component.interface';

/**
 * Movies Card Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.09.18
 */
export type MoviesCardInterface = CardPropsInterface &
    MovieListItemInterface;
