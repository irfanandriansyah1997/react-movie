import ModelAbstract from '../../abstract/model.abstract';
import { ErrorInterface } from './interface/model.interface';

/**
 * Error  Model
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.09.17
 */
class ErrorModel extends ModelAbstract<ErrorInterface> {
    private error: boolean = false;

    private message: string = '';

    /**
     * Setter error
     * @param {boolean} error - Is Error
     * @return {this}
     */
    public setError(error: boolean): this {
        this.error = error;
        return this;
    }

    /**
     * Setter message
     * @param {string} message - Message Error
     * @return {this}
     */
    public setMessage(message: string): this {
        this.message = message;
        return this;
    }

    /**
     * Getter Model Value
     * @return {ErrorInterface}
     */
    public get modelValue(): ErrorInterface {
        const { error, message } = this;

        return {
            error,
            message
        };
    }
}

export default ErrorModel;
