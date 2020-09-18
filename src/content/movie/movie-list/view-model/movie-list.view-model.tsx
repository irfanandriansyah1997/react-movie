import { useSelector, useDispatch } from 'react-redux';
import React, {
    FunctionComponent,
    useEffect,
    useState
} from 'react';

import MovieListViews from '../views/movie-list.views';
import MovieListHelper from '../helper/movie-list.helper';
import MovieListContext from '../context/movie-list.context';
import { TypeValueReducers } from '../../../../shared/reducers';
import { MovieListContextInterface } from '../context/interfaces/context.interface';
import { MovieListItemInterface } from '../../../../shared/model/movie/interface/model.interface';
import {
    setMovieListAction,
    unsetMovieListAction
} from '../../../../shared/reducers/movie-list/action/movie-list.action';
import {
    setPageAction,
    setPaginationAction,
    unsetPaginationAction
} from '../../../../shared/reducers/pagination/action/pagination.action';

/**
 * Movie List View Model
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.09.18
 */
const MovieListViewModel: FunctionComponent<{}> = () =>  {
    const dispatch = useDispatch();
    const [query, setQuery] = useState<string>('Batman');
    // const [showDialog, setShowDialog] = useState<boolean>(false);
    const [activeMovie, setActiveMovie] = useState<MovieListItemInterface>(({
        id: '',
        poster: '',
        title: '',
        type: 'movie',
        year: ''
    }));

    const {
        page,
        totalPage,
        totalResult
    } = useSelector(({
        pagination: state
    }: TypeValueReducers) => {
        const {
            page: valPage,
            totalPage: valTotal,
            totalResult: valTotalResult
        } = state.pagination;

        return {
            page: valPage,
            totalPage: valTotal,
            totalResult: valTotalResult
        };
    });
    
    const movieList = useSelector(({ list: state }: TypeValueReducers) => {
        return state.item;
    });

    /**
     * Is Fetch API
     * @return {void}
     */
    const isFetchAPI = (): void => {
        if (page + 1 <= totalPage) {
            dispatch(setPageAction(page + 1));
        }
    };

    /**
     * Fetch API
     * @return {void}
     */
    const fetchAPI = (): void => {
        try {
            MovieListHelper.fetchAPI(page, query).then((response) => {
                if (response && response.pagination.page === 1) {
                    dispatch(unsetMovieListAction());
                    dispatch(unsetPaginationAction());
                }

                if (response && response.item.length > 0) {
                    const { item, pagination } = response;
                    dispatch(setMovieListAction(item));
                    dispatch(setPaginationAction(pagination));
                }
            });
        } catch (e) {
            dispatch(unsetMovieListAction());
            dispatch(unsetPaginationAction());
        }
    };

    /**
     * On Change Query
     * @returns {void}
     */
    const onChangeQuery = (text: string): void => {
        dispatch(unsetMovieListAction());
        dispatch(unsetPaginationAction());
        setQuery(text);
        dispatch(setPageAction(1));
    };

    const contextValue: MovieListContextInterface = {
        query,
        activeMovie,
        setActiveMovie,
        onFetchAPI: isFetchAPI,
        setQuery: onChangeQuery,
    };

    useEffect(() => {
        dispatch(setPageAction(1));
    // eslint-disable-next-line
    }, []);

    // Query & Page Update
    useEffect(fetchAPI, [page, query]);

    return (
        <MovieListContext.Provider value={contextValue}>
            <MovieListViews
                item={movieList}
                totalResult={totalResult}
            />
        </MovieListContext.Provider>
    );
};

export default MovieListViewModel;