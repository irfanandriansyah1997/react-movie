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
