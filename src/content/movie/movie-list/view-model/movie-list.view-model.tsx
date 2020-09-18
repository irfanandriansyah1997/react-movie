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
import { setMovieListAction } from '../../../../shared/reducers/movie-list/action/movie-list.action';
import { setPageAction, setPaginationAction } from '../../../../shared/reducers/pagination/action/pagination.action';

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

    const { totalPage, page } = useSelector(({ pagination: state }: TypeValueReducers) => {
        const {
            page: valPage,
            totalPage: valTotal
        } = state.pagination;

        return {
            page: valPage,
            totalPage: valTotal
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
        MovieListHelper.fetchAPI(page, query).then((response) => {
            if (response) {
                const { item, pagination } = response;
                dispatch(setMovieListAction(item));
                dispatch(setPaginationAction(pagination));
            }
        });
    };

    const contextValue: MovieListContextInterface = {
        query,
        setQuery,
        activeMovie,
        setActiveMovie,
        onFetchAPI: isFetchAPI
    };

    useEffect(() => {
        dispatch(setPageAction(1));
    }, []);

    // Query & Page Update
    useEffect(fetchAPI, [page, query]);

    return (
        <MovieListContext.Provider value={contextValue}>
            <MovieListViews
                item={movieList}
            />
        </MovieListContext.Provider>
    );
};

export default MovieListViewModel;