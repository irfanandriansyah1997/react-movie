import React, { FunctionComponent, useEffect } from 'react';
import APIListRequestModel from '../../../shared/model/api/api-list-request.model';
import RepositoryRestAPIService from '../../../shared/repository/rest';

/**
 * Movie List Page
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.09.17
 */
const MovieListPage: FunctionComponent = () => {
    useEffect(() => {
        const param = new APIListRequestModel().setPage(1).setQuerySearch('Batman');
        RepositoryRestAPIService
            .MovieRepository().getListMovie(param).then((item) => {
                console.debug(item);
            });
    });
    return (
        <div className="heading">
            Movie List Page
        </div>
    );
};

export default MovieListPage;