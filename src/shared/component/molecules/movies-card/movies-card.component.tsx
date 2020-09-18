import PropTypes from 'prop-types';
import React, { FunctionComponent, Validator } from 'react';

import { Link } from 'react-router-dom';
import StringHelper from '../../../helper/string.helper';
import CardComponent from '../../atomic/card/card.component';
import TextComponent from '../../atomic/text/text.component';
import { MovieType } from '../../../interface/movie-type.interface';
import {  MoviesCardInterface } from './interface/component.interface';

import style from './style/style.module.css';

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
            className={StringHelper.objToString({
                [style.card]: true,
                'ui-movies-card': true
            })}
        >
            <div className={style.container}>
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
                <Link
                    className={style.content}
                    to={`/detail/${id}`}
                >
                    <div className={style.title}>
                        <TextComponent
                            styling="heading"
                            fontWeight={500}
                            color="#222b45"
                            className={StringHelper.objToString({
                            
                                'ui-movies-card__title': true
                            })}
                        >
                            {title}
                        </TextComponent>
                    </div>
                    <ul className={style.list}>
                        <li>
                            <TextComponent
                                styling="caption"
                                color="#697684"
                                className={StringHelper.objToString({
                                    [style.listItem]: true,
                                    'ui-movies-card__list-item': true
                                })}
                            >
                                {type}
                            </TextComponent>
                        </li>
                        <li>
                            <TextComponent
                                styling="caption"
                                color="#697684"
                                className={StringHelper.objToString({
                                    [style.listItem]: true,
                                    'ui-movies-card__list-item': true
                                })}
                            >
                                {year}
                            </TextComponent>
                        </li>
                    </ul>
                </Link>
            </div>
        </CardComponent>
    );
};

MoviesCardComponent.propTypes = {
    title: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    type: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.oneOf<MovieType>(['episode', 'movie', 'series'])
    ]).isRequired as Validator<MovieType>,
    poster: PropTypes.string.isRequired,  
};

MoviesCardComponent.defaultProps = {
    type: 'episode'
};

export default MoviesCardComponent;