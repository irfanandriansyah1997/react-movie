import React, { FunctionComponent } from 'react';
import { useParams } from 'react-router-dom';
import MovieDetailViewModel from './view-model/movie-detail.view-model';

/**
 * Movie Detail Page
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.09.17
 */
const MovieDetailPage: FunctionComponent = (props) => {
    const { id } = useParams<{id: string}>();
    
    return (
        <MovieDetailViewModel
            id={id}
        />
    );
};

export default MovieDetailPage;