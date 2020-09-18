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

    /**
     * Object To String
     * @param {Record<string, string>} obj - object classname
     * @return {string}
     */
    static objToString(
        obj: Record<string, boolean>
    ): string {
        return Object.keys(obj)
            .filter((item: string) => obj[item])
            .map((item: string) => item)
            .join(' ');
    }
}

export default StringHelper;
