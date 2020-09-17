import ModelAbstract from '../../abstract/model.abstract';
import ValidatorHelper from '../../helper/validator.helper';
import { ScoreInterface } from './interface/model.interface';

/**
 * Score Model
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.09.17
 */
class ScoreModel extends ModelAbstract<ScoreInterface> {
    private metaScore: string = '';

    private imdbRating: string = '';

    private imdbVotes: string = '';

    /**
     * Set metaScore
     * @param {string} metaScore: metaScore value
     * @return {this}
     */
    public setMetaScore(metaScore: string): this {
        this.metaScore = metaScore;
        return this;
    }

    /**
     * Set imdbRating
     * @param {string} imdbRating: imdbRating value
     * @return {this}
     */
    public setImdbRating(imdbRating: string): this {
        this.imdbRating = imdbRating;
        return this;
    }

    /**
     * Set imdbVotes
     * @param {string} imdbVotes: imdbVotes value
     * @return {this}
     */
    public setImdbVotes(imdbVotes: string): this {
        this.imdbVotes = imdbVotes;
        return this;
    }

    /**
     * Getter Model Value
     * @return {ScoreInterface}
     */
    public get modelValue(): ScoreInterface {
        const { imdbRating, metaScore, imdbVotes } = this;

        if (
            ValidatorHelper.bulkVerifiedIsNotEmpty([
                imdbRating,
                metaScore,
                imdbVotes
            ])
        ) {
            return {
                imdbRating,
                metaScore,
                imdbVotes
            };
        }

        throw Error('Set ID Not Invoked');
    }
}

export default ScoreModel;
