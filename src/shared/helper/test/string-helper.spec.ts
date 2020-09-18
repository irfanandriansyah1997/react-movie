import StringHelper from '../string.helper';

describe('Testing string helper', () => {
    it('testing method validate number and parsing into string', () => {
        expect(
            StringHelper.validateNumberAndParsedToInteger(0)
        ).toBe(0);
        expect(
            StringHelper.validateNumberAndParsedToInteger(
                '5'
            )
        ).toBe(5);
        expect(
            StringHelper.validateNumberAndParsedToInteger(
                'a'
            )
        ).toBe(0);
        expect(
            StringHelper.validateNumberAndParsedToInteger(
                '5.5'
            )
        ).toBe(5);
    });

    it('convert object to string success', () => {
        expect(
            StringHelper.objToString({
                'testing-1': true,
                'testing-2': false,
                'testing-3': true
            })
        ).toBe('testing-1 testing-3');
    });

    it('convert object to string with undefined', () => {
        try {
            StringHelper.objToString(
                (undefined as unknown) as Record<
                    string,
                    boolean
                >
            );
        } catch (e) {
            expect(e.message).toBe(
                'Cannot convert undefined or null to object'
            );
        }
    });
});
