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
    private title: string = 'N/A';

    private year: string = 'N/A';

    private id: string = 'N/A';

    private type: MovieType = 'movie';

    private plot: string = 'N/A';

    private rated: string = 'N/A';

    private genre: string = 'N/A';

    private poster: string = 'N/A';

    private runtime: string = 'N/A';

    private released: string = 'N/A';

    private production: string = 'N/A';

    private score: ScoreModel = new ScoreModel();

    private ratings: RatingModel = new RatingModel();

    private figure: MovieFigureModel = new MovieFigureModel();

    /**
     * Set title
     * @param {string} title - title value
     * @returns {this}
     */
    public setTitle(title: string): this {
        if (title) {
            this.title = title;
        }

        return this;
    }

    /**
     * Set year
     * @param {string} year - year value
     * @returns {this}
     */
    public setYear(year: string): this {
        if (year) {
            this.year = year;
        }

        return this;
    }

    /**
     * Set id
     * @param {string} id - id value
     * @returns {this}
     */
    public setId(id: string): this {
        if (id) {
            this.id = id;
        }

        return this;
    }

    /**
     * Set type
     * @param {MovieType} type - type value
     * @returns {this}
     */
    public setType(type: MovieType): this {
        if (type) {
            this.type = type;
        }

        return this;
    }

    /**
     * Set plot
     * @param {string} plot - plot value
     * @return {this}
     */
    public setPlot(plot: string): this {
        if (plot) {
            this.plot = plot;
        }

        return this;
    }

    /**
     * Set rated
     * @param {string} rated - rated value
     * @return {this}
     */
    public setRated(rated: string): this {
        if (rated) {
            this.rated = rated;
        }

        return this;
    }

    /**
     * Set genre
     * @param {string} genre - genre value
     * @return {this}
     */
    public setGenre(genre: string): this {
        if (genre) {
            this.genre = genre;
        }

        return this;
    }

    /**
     * Set poster
     * @param {string} poster - poster value
     * @return {this}
     */
    public setPoster(poster: string): this {
        if (poster) {
            this.poster = poster;
        }

        return this;
    }

    /**
     * Set runtime
     * @param {string} runtime - runtime value
     * @return {this}
     */
    public setRuntime(runtime: string): this {
        if (runtime) {
            this.runtime = runtime;
        }

        return this;
    }

    /**
     * Set released
     * @param {string} released - released value
     * @return {this}
     */
    public setReleased(released: string): this {
        if (released) {
            this.released = released;
        }

        return this;
    }

    /**
     * Set production
     * @param {string} production - production value
     * @return {this}
     */
    public setProduction(production: string): this {
        if (production) {
            this.production = production;
        }

        return this;
    }

    /**
     * Set score
     * @param {ScoreModel} score - score value
     * @return {this}
     */
    public setScore(score: ScoreModel): this {
        if (score) {
            this.score = score;
        }

        return this;
    }

    /**
     * Set ratings
     * @param {RatingModel} ratings - ratings value
     * @return {this}
     */
    public setRatings(ratings: RatingModel): this {
        if (ratings) {
            this.ratings = ratings;
        }

        return this;
    }

    /**
     * Set figure
     * @param {MovieFigureModel} figure - figure value
     * @return {this}
     */
    public setFigure(figure: MovieFigureModel): this {
        if (figure) {
            this.figure = figure;
        }

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
