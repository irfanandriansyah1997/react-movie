import ValidatorHelper from '../validator.helper';

describe('Testing validator helper', () => {
    describe('Testing method verified is not empty', () => {
        it('Invoke this method with correct and incorrect parameter', () => {
            expect(
                ValidatorHelper.verifiedIsNotEmpty(null)
            ).toBe(false);
            expect(
                ValidatorHelper.verifiedIsNotEmpty(
                    undefined
                )
            ).toBe(false);
            expect(
                ValidatorHelper.verifiedIsNotEmpty('')
            ).toBe(false);
            expect(
                ValidatorHelper.verifiedIsNotEmpty(
                    'is defined'
                )
            ).toBe(true);
        });
    });

    describe('Testing method verified is not null', () => {
        it('Invoke this method with correct and incorrect parameter', () => {
            expect(
                ValidatorHelper.verifiedIsNotNull(null)
            ).toBe(false);
            expect(
                ValidatorHelper.verifiedIsNotNull(undefined)
            ).toBe(false);
            expect(
                ValidatorHelper.verifiedIsNotNull('')
            ).toBe(true);
            expect(
                ValidatorHelper.verifiedIsNotNull(
                    'is defined'
                )
            ).toBe(true);
        });
    });

    describe('Testing method bulk vierified is not empty', () => {
        it('Invoke this method with correct and incorrect parameter', () => {
            expect(
                ValidatorHelper.bulkVerifiedIsNotNull([
                    null,
                    '',
                    'abc'
                ])
            ).toBe(false);
            expect(
                ValidatorHelper.bulkVerifiedIsNotNull([
                    null,
                    1997,
                    'abc'
                ])
            ).toBe(false);
            expect(
                ValidatorHelper.bulkVerifiedIsNotNull([
                    {},
                    1997,
                    'abc',
                    ''
                ])
            ).toBe(true);
        });
    });
});
