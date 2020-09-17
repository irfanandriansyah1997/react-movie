import ScoreModel from '../general/score.model';
import RatingModel from '../general/rating.model';
import MovieFigureModel from './movie-figure.model';
import ModelAbstract from '../../abstract/model.abstract';
import ValidatorHelper from '../../helper/validator.helper';
import { MovieType } from '../../interface/movie-type.interface';
import { MovieDetailInterface } from './interface/model.interface';

/**
 * Movie Detail Model
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.09.17
 */
class MovieDetailModel extends ModelAbstract<
    MovieDetailInterface
> {
    private title: string = '';

    private year: string = '';

    private id: string = '';

    private type: MovieType = 'movie';

    private plot: string = '';

    private rated: string = '';

    private genre: string = '';

    private poster: string = '';

    private runtime: string = '';

    private released: string = '';

    private production: string = '';

    private score: ScoreModel = new ScoreModel();

    private ratings: RatingModel = new RatingModel();

    private figure: MovieFigureModel = new MovieFigureModel();

    /**
     * Set title
     * @param {string} title - title value
     * @returns {this}
     */
    public setTitle(title: string): this {
        this.title = title;
        return this;
    }

    /**
     * Set year
     * @param {string} year - year value
     * @returns {this}
     */
    public setYear(year: string): this {
        this.year = year;
        return this;
    }

    /**
     * Set id
     * @param {string} id - id value
     * @returns {this}
     */
    public setId(id: string): this {
        this.id = id;
        return this;
    }

    /**
     * Set type
     * @param {MovieType} type - type value
     * @returns {this}
     */
    public setType(type: MovieType): this {
        this.type = type;
        return this;
    }

    /**
     * Set plot
     * @param {string} plot - plot value
     * @return {this}
     */
    public setPlot(plot: string): this {
        this.plot = plot;
        return this;
    }

    /**
     * Set rated
     * @param {string} rated - rated value
     * @return {this}
     */
    public setRated(rated: string): this {
        this.rated = rated;
        return this;
    }

    /**
     * Set genre
     * @param {string} genre - genre value
     * @return {this}
     */
    public setGenre(genre: string): this {
        this.genre = genre;
        return this;
    }

    /**
     * Set poster
     * @param {string} poster - poster value
     * @return {this}
     */
    public setPoster(poster: string): this {
        this.poster = poster;
        return this;
    }

    /**
     * Set runtime
     * @param {string} runtime - runtime value
     * @return {this}
     */
    public setRuntime(runtime: string): this {
        this.runtime = runtime;
        return this;
    }

    /**
     * Set released
     * @param {string} released - released value
     * @return {this}
     */
    public setReleased(released: string): this {
        this.released = released;
        return this;
    }

    /**
     * Set production
     * @param {string} production - production value
     * @return {this}
     */
    public setProduction(production: string): this {
        this.production = production;
        return this;
    }

    /**
     * Set score
     * @param {ScoreModel} score - score value
     * @return {this}
     */
    public setScore(score: ScoreModel): this {
        this.score = score;
        return this;
    }

    /**
     * Set ratings
     * @param {RatingModel} ratings - ratings value
     * @return {this}
     */
    public setRatings(ratings: RatingModel): this {
        this.ratings = ratings;
        return this;
    }

    /**
     * Set figure
     * @param {MovieFigureModel} figure - figure value
     * @return {this}
     */
    public setFigure(figure: MovieFigureModel): this {
        this.figure = figure;
        return this;
    }

    /**
     * Getter Model Value
     * @return {MovieDetailInterface}
     */
    public get modelValue(): MovieDetailInterface {
        const {
            plot,
            rated,
            genre,
            poster,
            runtime,
            released,
            production,
            score,
            ratings,
            figure,
            title,
            year,
            id,
            type
        } = this;

        if (
            ValidatorHelper.bulkVerifiedIsNotEmpty([
                plot,
                rated,
                genre,
                poster,
                runtime,
                released,
                production,
                score.modelValue,
                ratings.modelValue,
                figure.modelValue,
                title,
                year,
                id,
                type
            ])
        ) {
            return {
                plot,
                rated,
                genre,
                poster,
                runtime,
                released,
                production,
                score: score.modelValue,
                ratings: ratings.modelValue,
                figure: figure.modelValue,
                title,
                year,
                id,
                type
            };
        }

        throw Error('Data Not Completed');
    }
}

export default MovieDetailModel;
