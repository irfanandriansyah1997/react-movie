import PropTypes from 'prop-types';
import React, { FunctionComponent, Validator } from 'react';

import StringHelper from '../../../helper/string.helper';
import ValidatorHelper from '../../../helper/validator.helper';
import {
    TextPropsInterace,
    ComponentStylingTypography,
    ComponentFontWeightTypography,
} from './interface/component.interface';

import style from './style/style.module.css';

/**
 * Text Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.09.18
 */
const TextComponent: FunctionComponent<TextPropsInterace> = ({
    align,
    color,
    styling,
    className,
    fontWeight,
    ...res
}) => {
    return (
        <p
            {...res}
            className={StringHelper.objToString({
                [style.text]: true,
                [style[`${styling}`]]: ValidatorHelper.verifiedIsNotEmpty(styling),
                [`${className}`]: ValidatorHelper.verifiedIsNotEmpty(className),
            })}
            style={{
                ...res.style,
                color,
                fontWeight,
                textAlign: align
            }}
        />
    );
};

TextComponent.propTypes = {
    color: PropTypes.string,
    styling: PropTypes.oneOf<ComponentStylingTypography>([
        'caption',
        'heading',
        'default'
    ]) as Validator<ComponentStylingTypography>,
    fontWeight: PropTypes.oneOf<ComponentFontWeightTypography>([
        300,
        400,
        500,
        600,
        700
    ]) as Validator<ComponentFontWeightTypography>
};

TextComponent.defaultProps = {
    color: undefined,
    styling: 'default',
    fontWeight: 400
};

export default TextComponent;