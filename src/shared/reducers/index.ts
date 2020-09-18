import { combineReducers } from 'redux';

import { Reducer } from 'react';
import MovieListReducers from './movie-list';
import PaginationReducers from './pagination';
import MovieDetailReducers from './movie-detail';
import { MovieDetailReducerInterface } from './movie-detail/interfaces/movie-detail-reducer.interface';
import { PaginationReducerInterface } from './pagination/interfaces/pagination-reducer.interface';
import { ReducerActionParamInterface } from '../modules/redux/interfaces/redux-action.interface';
import { MovieListReducerInterface } from './movie-list/interfaces/movie-list-reducer.interface';

export const Reducers = combineReducers({
    list: MovieListReducers,
    detail: MovieDetailReducers,
    pagination: PaginationReducers
});

export type TypeReducers = {
    list: Reducer<
        MovieListReducerInterface,
        ReducerActionParamInterface
    >;
    detail: Reducer<
        MovieDetailReducerInterface,
        ReducerActionParamInterface
    >;
    pagination: Reducer<
        PaginationReducerInterface,
        ReducerActionParamInterface
    >;
};

export type TypeValueReducers = {
    list: MovieListReducerInterface;
    detail: MovieDetailReducerInterface;
    pagination: PaginationReducerInterface;
};
