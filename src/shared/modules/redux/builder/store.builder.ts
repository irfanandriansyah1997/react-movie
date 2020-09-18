/* eslint-disable @typescript-eslint/no-explicit-any */
import { Reducer } from 'react';
import thunk from 'redux-thunk';
import {
    Store,
    compose,
    createStore,
    applyMiddleware
} from 'redux';

import { Reducers } from '../../../reducers';
import {
    StoreInterface,
    ReducerActionParamInterface
} from '../interfaces/redux-action.interface';

/**
 * Configure Store Helper
 * @author Irfan Andriansyah <irfan@99.co>
 * @description singleton class for helped generate store and setup redux
 * @since 2020.09.18
 */
class StoreBuilder {
    private reducers:
        | Reducer<any, ReducerActionParamInterface>
        | undefined;

    /**
     * Getter composeEnhancers Method
     * @description Getter compose enhancers
     * @return {any}
     */
    private get composeEnhancers(): any {
        return (
            (window as any)
                .__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||
            compose
        );
    }

    /**
     * setReducers Method
     * @param {any} reducers - reducers from return method combineReducers
     * @description setter reducers
     * @return {this}
     */
    public setReducers(
        reducers: Reducer<any, ReducerActionParamInterface>
    ): this {
        this.reducers = reducers;
        return this;
    }

    /**
     * generateStore Method
     * @description generate store redux config
     * @return {ConfigureStoreResponseInterface}
     */
    public generateStore(): StoreInterface {
        const { reducers, composeEnhancers } = this;

        if (reducers) {
            const store: Store<
                any,
                ReducerActionParamInterface
            > = createStore(
                reducers,
                {},
                composeEnhancers(applyMiddleware(thunk))
            );

            return store;
        }

        throw new Error('Reducers Undefined !');
    }

    /**
     * Singleton Builder
     * @description
     */
    public static singleton(): StoreInterface {
        return new StoreBuilder()
            .setReducers(Reducers)
            .generateStore();
    }
}

export default StoreBuilder;
