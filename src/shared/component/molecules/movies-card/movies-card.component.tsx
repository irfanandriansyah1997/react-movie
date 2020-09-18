import PropTypes from 'prop-types';
import React, { FunctionComponent } from 'react';

import CardComponent from '../../atomic/card/card.component';
import { MovieType } from '../../../interface/movie-type.interface';
import {  MoviesCardInterface } from './interface/component.interface';

import style from './style/style.module.css';
import TextComponent from '../../atomic/text/text.component';
import StringHelper from '../../../helper/string.helper';

/**
 * Movies Card Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.09.18
 */
const MoviesCardComponent: FunctionComponent<MoviesCardInterface> = ({
    className,
    id,
    poster,
    title,
    type,
    year,
    onClick,
    ...res
}) => {
    return (
        <CardComponent
            {...res}
            className="ui-movies-card"
        >
            <div className={style.card}>
                <img
                    alt={title}
                    src={poster}
                    onClick={onClick}
                    role='presentation'
                    className={StringHelper.objToString({
                        [style.image]: true,
                        'ui-movies-card__image': true
                    })}
                />
                <div className={style.content}>
                    <TextComponent styling="heading3">{title}</TextComponent>
                    <ul className={style.list}>
                        <li>
                            <TextComponent styling="heading5">{type}</TextComponent>
                        </li>
                        <li>
                            <TextComponent styling="heading5">{year}</TextComponent>
                        </li>
                    </ul>
                </div>
            </div>
        </CardComponent>
    );
};

MoviesCardComponent.propTypes = {
    title: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    type: PropTypes.oneOf<MovieType>(['episode', 'movie', 'series']).isRequired,
    poster: PropTypes.string.isRequired,
    
};

export default MoviesCardComponent;