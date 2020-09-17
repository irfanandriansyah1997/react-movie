/**
 * Model Abstract
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.09.17
 */
abstract class ModelAbstract<T> {
    abstract get modelValue(): T | undefined;
}

export default ModelAbstract;
