/**
 * Validator Helper
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.09.17
 */
class ValidatorHelper {
    /**
     * Verified Is Not Empty
     * @param {unknown} param - parameter to check
     * Validator checking parameter input is not undefined / null
     */
    static verifiedIsNotEmpty(param: unknown): boolean {
        return (
            [undefined, null, ''].filter(
                (item: unknown) => param === item
            ).length === 0
        );
    }

    /**
     * Verified Is Not Null
     * @param {unknown} param - parameter to check
     * Validator checking parameter input is not undefined / null
     */
    static verifiedIsNotNull(param: unknown): boolean {
        return (
            [undefined, null].filter(
                (item: unknown) => param === item
            ).length === 0
        );
    }

    /**
     * Bulk Verified Is Not Empty
     * @param {unknown[]} param - parameter to check
     * Validator checking parameter input is not undefined / null
     */
    static bulkVerifiedIsNotEmpty(
        param: unknown[]
    ): boolean {
        return (
            param.filter(
                (item) =>
                    !ValidatorHelper.verifiedIsNotEmpty(
                        item
                    )
            ).length === 0
        );
    }

    /**
     * Bulk Verified Is Not Null
     * @param {unknown[]} param - parameter to check
     * Validator checking parameter input is not undefined / null
     */
    static bulkVerifiedIsNotNull(
        param: unknown[]
    ): boolean {
        return (
            param.filter(
                (item) =>
                    !ValidatorHelper.verifiedIsNotNull(item)
            ).length === 0
        );
    }
}

export default ValidatorHelper;
