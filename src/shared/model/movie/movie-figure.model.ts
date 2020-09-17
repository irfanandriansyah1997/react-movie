import ModelAbstract from '../../abstract/model.abstract';
import ValidatorHelper from '../../helper/validator.helper';
import { MovieFigureInterface } from './interface/model.interface';

/**
 * Movie Figure Model
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.09.17
 */
class MovieFigureModel extends ModelAbstract<
    MovieFigureInterface
> {
    private director: string = '';

    private writter: string = '';

    private actors: string = '';

    /**
     * Set Director
     * @param {string} director - director value
     * @retrun {this}
     */
    public setDirector(director: string): this {
        this.director = director;
        return this;
    }

    /**
     * Set Writter
     * @param {string} writter - writter value
     * @retrun {this}
     */
    public setWritter(writter: string): this {
        this.writter = writter;
        return this;
    }

    /**
     * Set Actors
     * @param {string} actors - actors value
     * @retrun {this}
     */
    public setActors(actors: string): this {
        this.actors = actors;
        return this;
    }

    /**
     * Getter Model Value
     * @return {ScoreInterface}
     */
    public get modelValue(): MovieFigureInterface {
        const { director, writter, actors } = this;

        if (
            ValidatorHelper.bulkVerifiedIsNotEmpty([
                director,
                writter,
                actors
            ])
        ) {
            return {
                director,
                writter,
                actors
            };
        }

        throw Error('Data Not Completed');
    }
}

export default MovieFigureModel;
