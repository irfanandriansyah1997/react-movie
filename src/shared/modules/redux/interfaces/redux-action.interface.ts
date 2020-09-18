/* eslint-disable @typescript-eslint/no-explicit-any */
import { Store } from 'redux';

/**
 * Reducer Action Param Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @description sceleton field to send action to reducers
 * @since 2020.09.18
 */
export interface ReducerActionParamInterface {
    type: string;
    payload: Record<string, unknown>;
    page?: string;
}

/**
 * Generate Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @description
 * @since 2020.09.18
 */
export type StoreInterface = Store<
    any,
    ReducerActionParamInterface
>;
