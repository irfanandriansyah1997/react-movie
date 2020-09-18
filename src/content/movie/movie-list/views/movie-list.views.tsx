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
import { useInfiniteScroll } from '../../../../shared/helper/intersection-observer.helper';
import { MovieListItemInterface } from '../../../../shared/model/movie/interface/model.interface';
import MoviesCardComponent from '../../../../shared/component/molecules/movies-card/movies-card.component';

import style from './style/style.module.css';
import HeaderComponent from '../../../../shared/component/molecules/header/header.component';
import TextComponent from '../../../../shared/component/atomic/text/text.component';

/**
 * Movie List Views
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.09.18
 */
const MovieListViews: FunctionComponent<ViewsPropsInterface> = ({
    item: movieList,
    totalResult
}) => {
    const [isFetching, setIsFetching] = useInfiniteScroll();
    const {
        setActiveMovie,
        query,
        onFetchAPI,
        setQuery
    } = useContext<
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
        <>
            <HeaderComponent
                value={query}
                onChange={setQuery}
            />
            <div className="ui-container">
                {totalResult > 0 && (
                    <TextComponent
                        align="center"
                        styling="default"
                        className={style.result}
                    >
                        Hasil pencarian 
                        <b>"{query}"</b>
                        sebanyak {totalResult} data
                    </TextComponent>
                )}
                <div className={style.list}>
                    {movieList.map((item) => (
                        <MoviesCardComponent
                            key={item.id}
                            {...item}
                            onClick={(): void => setActiveMovie(item)}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

MovieListViews.propTypes = {
    item: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        year: PropTypes.string,
        id: PropTypes.string,
        type: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.oneOf<MovieType>(['episode', 'movie', 'series'])
        ]),
        poster: PropTypes.string,
    })).isRequired as Validator<MovieListItemInterface[]>
};

MovieListViews.defaultProps = {
    item: []
};

export default MovieListViews;