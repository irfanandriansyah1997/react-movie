import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import TextComponent from '../../../../shared/component/atomic/text/text.component';
import { MovieDetailInterface } from '../../../../shared/model/movie/interface/model.interface';

import style from './style/style.module.css';

/**
 * Movie Detail Views
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.09.18
 */
const MovieDetailViews: FunctionComponent<MovieDetailInterface> = ({
    figure,
    genre,
    id,
    plot,
    poster,
    production,
    rated,
    ratings,
    released,
    runtime,
    title,
    type
}) => {
    return (
        <div className={style.detail}>
            <div className={style.heading}>
                <div className="ui-container">
                    <Link to="">
                        <span className="material-icons">
                            arrow_back_ios
                        </span>
                        <TextComponent styling="heading">
                            Kembali
                        </TextComponent>
                    </Link>
                </div>
            </div>
            <img src={poster} alt={title} />
            <table>
                <tbody>
                    <tr>
                        <td>Title</td>
                        <td>{title}</td>
                    </tr>
                    <tr>
                        <td>Genre</td>
                        <td>{genre}</td>
                    </tr>
                    <tr>
                        <td>IMDB ID</td>
                        <td>{id}</td>
                    </tr>
                    <tr>
                        <td>Figure</td>
                        <td>
                            <ul className={style.actors}>
                                <li>
                                    <div>
                                        Actors
                                    </div>
                                    <div>
                                        {figure.actors}
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        Directors
                                    </div>
                                    <div>
                                        {figure.director}
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        Writters
                                    </div>
                                    <div>
                                        {figure.writter}
                                    </div>
                                </li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>Plot</td>
                        <td>{plot}</td>
                    </tr>
                    <tr>
                        <td>Production</td>
                        <td>{production}</td>
                    </tr>
                    <tr>
                        <td>Released</td>
                        <td>{released}</td>
                    </tr>
                    <tr>
                        <td>Runtime</td>
                        <td>{runtime}</td>
                    </tr>
                    <tr>
                        <td>Type</td>
                        <td>{type}</td>
                    </tr>
                    <tr>
                        <td>Rated</td>
                        <td>{rated}</td>
                    </tr>
                    <tr>
                        <td>Rating</td>
                        <td>
                            <ul>
                                {ratings.item.map((item) => (
                                    <li key={item.source}>
                                        <div>
                                            {item.source}
                                        </div>
                                        <div>
                                            {item.value}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default MovieDetailViews;