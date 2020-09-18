import PropTypes from 'prop-types';
import React, { FunctionComponent, Validator } from 'react';

import { ViewsPropsInterface } from './interfaces/views.interface';
import { MovieType } from '../../../../shared/interface/movie-type.interface';
import { MovieListItemInterface } from '../../../../shared/model/movie/interface/model.interface';
import MoviesCardComponent from '../../../../shared/component/molecules/movies-card/movies-card.component';

/**
 * Generate Class
 * @author Irfan Andriansyah <irfan@99.co>
 * @description 
 * @since 2020.09.18
 */
const MovieListViews: FunctionComponent<ViewsPropsInterface> = ({
    item: movieList
}) => {
    return (
        <div>
            {movieList.map((item) => (
                <MoviesCardComponent key={item.id} {...item} />
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