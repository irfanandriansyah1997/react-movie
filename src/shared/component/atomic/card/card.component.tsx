import React, { FunctionComponent } from 'react';
import StringHelper from '../../../helper/string.helper';
import ValidatorHelper from '../../../helper/validator.helper';
import { CardPropsInterface } from './interface/component.interface';

import style from './style/style.module.css';

/**
 * Card Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @description 
 * @since 2020.09.18
 */
const CardComponent: FunctionComponent<CardPropsInterface> = ({
    className,
    ...res
}) => {
    return (
        <div
            {...res}
            className={StringHelper.objToString({
                [`${className}`]: ValidatorHelper.verifiedIsNotEmpty(className),
                [style.card]: true
            })}
        />
    );
};

export default CardComponent;