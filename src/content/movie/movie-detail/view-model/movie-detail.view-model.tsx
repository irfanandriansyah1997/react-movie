import {
    useSelector,
    useDispatch
} from 'react-redux';
import React, {
    useState,
    useEffect,
    FunctionComponent,
} from 'react';

import MovieDetailHelper from '../helper/movie-detail.helper';
import { TypeValueReducers } from '../../../../shared/reducers';
import { ErrorInterface } from '../../../../shared/model/error/interface/model.interface';
import { MovieDetailInterface } from '../../../../shared/model/movie/interface/model.interface';
import { unsetMovieListAction } from '../../../../shared/reducers/movie-list/action/movie-list.action';
import { unsetPaginationAction } from '../../../../shared/reducers/pagination/action/pagination.action';
import { setMovieDetailAction } from '../../../../shared/reducers/movie-detail/action/movie-detail.action';
import MovieDetailViews from '../views/movie-detail.views';

/**
 * Movie Detail View Model
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.09.18
 */
const MovieDetailViewModel: FunctionComponent<{
    id: string
}> = ({ id }) =>  {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<ErrorInterface>({
        error: false,
        message: 'Loading'
    });

    const dispatch = useDispatch();

    const property = useSelector(({
        detail
    }: TypeValueReducers) => {
        const { property: propertyVal } = detail;

        return propertyVal;
    });

    /**
     * Fetch API
     * @return {void}
     */
    const fetchAPI = (): void => {
        dispatch(unsetPaginationAction());
        dispatch(unsetMovieListAction());
        setLoading(true);
        setError({
            error: false,
            message: 'Loading'
        });

        try {
            MovieDetailHelper.fetchAPI(id).then((response) => {
                setLoading(false);
                const isError = Object.prototype.hasOwnProperty.call(response, 'error');
                if (response && !isError) {
                    dispatch(
                        setMovieDetailAction(response as MovieDetailInterface)
                    );
                } else if (response && isError) {
                    setError(response as ErrorInterface);
                }
            });
        } catch (e) {
            dispatch(unsetMovieListAction());
            dispatch(unsetPaginationAction());
        }
    };

    useEffect(fetchAPI, [id]);

    return (
        <div className="ui-container">
            {error.error || loading ? (
                <p 
                    style={{
                        top: '50%',
                        left: '50%',
                        fontSize: 24,
                        padding: 20,
                        borderRadius: 10,
                        background: 'white',
                        position: 'absolute',
                        transform: 'translate(-50%)',
                        boxShadow: '0 8px 16px -2px rgba(0, 0, 0, 0.1)',
                    }}
                >
                    {error.message}
                </p>
            ) : (
                <MovieDetailViews {...property} />
            )}
        </div>
    );
};

export default MovieDetailViewModel;