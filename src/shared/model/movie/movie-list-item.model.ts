import ModelAbstract from '../../abstract/model.abstract';
import ValidatorHelper from '../../helper/validator.helper';
import { MovieType } from '../../interface/movie-type.interface';
import { MovieListItemInterface } from './interface/model.interface';

/**
 * Movie List Item Model
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.09.17
 */
class MovieListItemModel extends ModelAbstract<
    MovieListItemInterface
> {
    private title: string = '';

    private year: string = '';

    private id: string = '';

    private type: MovieType = 'movie';

    private poster: string = '';

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
     * Set poster
     * @param {string} poster - poster value
     * @returns {this}
     */
    public setPoster(poster: string): this {
        this.poster = poster;
        return this;
    }

    /**
     * Getter Model Value
     * @return {ScoreInterface}
     */
    public get modelValue(): MovieListItemInterface {
        const { title, year, id, type, poster } = this;

        if (
            ValidatorHelper.bulkVerifiedIsNotEmpty([
                title,
                year,
                id,
                poster
            ])
        ) {
            return {
                title,
                year,
                id,
                type,
                poster
            };
        }

        throw Error('Data Not Completed');
    }
}

export default MovieListItemModel;
