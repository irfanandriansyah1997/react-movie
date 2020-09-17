import 'reflect-metadata';
import { RoutingItemInterface } from '../interface/routing-item.interface';

/**
 * Routing Modules
 * @param {string} pathModules - path modules
 * @returns {MethodDecorator}
 */
export const RoutingModulesDecorator = (
    pathModules: string
): ClassDecorator => (target: Object): void => {
    Reflect.defineMetadata('modules', pathModules, target);

    if (!Reflect.hasMetadata('submodules', target)) {
        Reflect.defineMetadata('submodules', [], target);
    }
};

/**
 * Routing Sub Modules
 * @param {string} pathSubModules - path sub modules
 * @returns {MethodDecorator}
 */
export const RoutingSubModulesDecorator = (
    pathSubModules: string
): MethodDecorator => (
    target: Object,
    methodName: string | symbol
): void => {
    const routes: RoutingItemInterface[] = [
        ...(Reflect.getMetadata(
            'submodules',
            target.constructor
        ) || []),
        {
            methodName,
            path: pathSubModules
        }
    ];

    Reflect.defineMetadata(
        'submodules',
        routes,
        target.constructor
    );
};
