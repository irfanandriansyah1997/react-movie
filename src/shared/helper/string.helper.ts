/**
 * String Helper
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.09.17
 */
class StringHelper {
    /**
     * Validate Number And Parsed To Integer
     * @param {unknow} number - parameter for parsing this method
     * @return {number}
     */
    static validateNumberAndParsedToInteger(
        number: unknown
    ): number {
        if (
            typeof number === 'number' ||
            typeof number === 'bigint' ||
            /^-?\d*(\.\d+)?$/.test(`${number}`)
        ) {
            return parseInt(`${number}`, 10);
        }

        return 0;
    }
}

export default StringHelper;
