/* eslint-disable @typescript-eslint/no-explicit-any */
import Axios from 'axios';

import ModelAbstract from '../../../abstract/model.abstract';
import ValidatorHelper from '../../../helper/validator.helper';

type TranslatorFuncType<T, R> = (
    param: T
) => ModelAbstract<R>;

/**
 * API Client Builder
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.09.17
 */
class APIClientBuilder<T = any, P = any, R = any> {
    private apiKey: string = '';

    private apiURI: string = '';

    private param: ModelAbstract<P> | undefined;

    private funcTranslator:
        | TranslatorFuncType<T, R>
        | undefined;

    /**
     * Set API Key
     * @param {string} apiKey - api key
     * @returns {this}
     */
    public setApiKey(apiKey: string): this {
        this.apiKey = apiKey;
        return this;
    }

    /**
     * Set API URI
     * @param {ModelAbstract<P>} param - parameter model
     * @returns {this}
     */
    public setParam(param: ModelAbstract<P>): this {
        this.param = param;
        return this;
    }

    /**
     * Set Param
     * @param {string} apiURI - api uri
     * @returns {this}
     */
    public setApiURI(apiURI: string): this {
        this.apiURI = apiURI;
        return this;
    }

    /**
     * Set Func Translatr
     * @param {string} apiURI - api uri
     * @returns {this}
     */
    public setFuncTranslator(
        func: TranslatorFuncType<T, R>
    ): this {
        this.funcTranslator = func;
        return this;
    }

    /**
     * Execute Builder
     * @return {Promise<R | undefined>}
     */
    public execute(): Promise<R | undefined> {
        const {
            apiKey: apikey,
            apiURI,
            param,
            funcTranslator
        } = this;

        if (
            funcTranslator &&
            ValidatorHelper.bulkVerifiedIsNotEmpty([
                apikey,
                apiURI,
                param
            ])
        ) {
            return APIClientBuilder.fetchAPI<T>(
                `${apiURI}`,
                {
                    apikey,
                    ...(param as ModelAbstract<P>)
                        .modelValue
                }
            )
                .then(funcTranslator)
                .then(({ modelValue }) => modelValue);
        }

        throw Error(
            'API Key, API URL and Func Translator Must Be Defined'
        );
    }

    /**
     * Fetch API
     * @description
     */
    private static fetchAPI<Type>(
        url: string,
        params: Record<string, any>
    ): Promise<Type> {
        return Axios.get<Type>(`${url}`, {
            params
        }).then(({ data, status }) => {
            if (status === 200) {
                return data;
            }

            throw new Error('Response Status 500');
        });
    }
}

export default APIClientBuilder;
