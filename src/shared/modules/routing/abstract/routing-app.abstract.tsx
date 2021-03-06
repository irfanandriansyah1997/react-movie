/* eslint-disable @typescript-eslint/no-explicit-any */

import { Provider } from 'react-redux';
import React, { PureComponent, ReactNode } from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import StoreBuilder from '../../redux/builder/store.builder';
import { StoreInterface } from '../../redux/interfaces/redux-action.interface';

import { RoutingItemInterface } from '../interface/routing-item.interface';

/**
 * Routing App
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.09.17
 */
abstract class RoutingAppAbstract extends PureComponent {
    /**
     * Generate Routing
     * @param {Object[]} modules - modules react
     * @return {ReactNode}
     */
    public static generateRouting(
        modules: Object[]
    ): ReactNode {
        return (
            <Switch>
                {modules.map((ModulesItem: any) => {
                    const controllerPath: string = Reflect.getMetadata('modules', ModulesItem);
                    const routes: RoutingItemInterface[] = Reflect
                        .getMetadata(
                            'submodules',
                            ModulesItem
                        ) || [];
                    const Modules = new ModulesItem();

                    return (
                        <Route path={controllerPath} key={controllerPath}>
                            {Modules.render()}         
                            {RoutingAppAbstract.generateRoutingItem(
                                Modules,
                                routes,
                                controllerPath
                            )}
                            
                        </Route>
                    );
                })}
            </Switch>
        );
    }

    /**
     * Generate Routing Item
     * @param {Object} modules - object class
     * @param {RoutingItemInterface[]} routes - routes list
     * @param {string} modulesPath - path uri
     * @return {ReactNode}
     */
    public static generateRoutingItem(
        modules: Object,
        routes: RoutingItemInterface[],
        modulesPath: string
    ): ReactNode {
        return (
            <Switch>
                {routes.map(({ methodName, ...res }) => {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    const Component: any = (modules as any)[methodName]();
                    
                    return (
                        <Route exact path={`${modulesPath}${res.path}`} key={res.path}>
                            <Component />
                        </Route>
                    );
                })}
            </Switch>
        );
    }

    private store: StoreInterface | undefined = undefined;

    constructor(props: {}) {
        super(props);

        this.store = StoreBuilder.singleton();
    }

    abstract get modules(): Object[];

    /**
     * Render
     */
    render(): ReactNode {
        const { store } = this;

        if (store) {
            return (
                <Provider store={store}>
                    <HashRouter>
                        {RoutingAppAbstract.generateRouting(this.modules)}
                    </HashRouter>
                </Provider>
            );
        }

        return (
            <HashRouter>
                {RoutingAppAbstract.generateRouting(this.modules)}
            </HashRouter>
        );
    }
}

export default RoutingAppAbstract;