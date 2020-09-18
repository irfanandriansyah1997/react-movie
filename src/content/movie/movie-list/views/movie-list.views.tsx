import PropTypes from 'prop-types';
import React, {
    Validator,
    useEffect,
    useContext,
    FunctionComponent
} from 'react';

import MovieListContext from '../context/movie-list.context';
import { ViewsPropsInterface } from './interfaces/views.interface';
import { MovieType } from '../../../../shared/interface/movie-type.interface';
import { MovieListContextInterface } from '../context/interfaces/context.interface';
import { MovieListItemInterface } from '../../../../shared/model/movie/interface/model.interface';
import { useInfiniteScroll } from '../../../../shared/helper/intersection-observer.helper';
import MoviesCardComponent from '../../../../shared/component/molecules/movies-card/movies-card.component';

import style from './style/style.module.css';

/**
 * Generate Class
 * @author Irfan Andriansyah <irfan@99.co>
 * @description 
 * @since 2020.09.18
 */
const MovieListViews: FunctionComponent<ViewsPropsInterface> = ({
    item: movieList
}) => {
    const [isFetching, setIsFetching] = useInfiniteScroll();
    const { setActiveMovie, onFetchAPI } = useContext<
        MovieListContextInterface
    >(MovieListContext);

    useEffect(() => {
        if (isFetching) {
            onFetchAPI();
            setIsFetching(false);
        }
        // eslint-disable-next-line
    }, [isFetching]);

    return (
        <div className={style.list}>
            {movieList.map((item) => (
                <MoviesCardComponent
                    key={item.id}
                    {...item}
                    onClick={(): void => setActiveMovie(item)}
                />
            ))}
        </div>
    );
};

MovieListViews.propTypes = {
    item: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        year: PropTypes.string,
        id: PropTypes.string,
        type: PropTypes.oneOf<MovieType>(['episode', 'movie', 'series']),
        poster: PropTypes.string,
    })).isRequired as Validator<MovieListItemInterface[]>
};

MovieListViews.defaultProps = {
    item: []
};

export default MovieListViews;