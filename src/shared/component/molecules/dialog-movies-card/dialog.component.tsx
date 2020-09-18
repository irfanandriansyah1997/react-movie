import React, { FunctionComponent } from 'react';

import style from './style/style.module.css';
import StringHelper from '../../../helper/string.helper';
import { DialogMoviesInterface } from './interface/component.interface';

/**
 * Dialog Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.09.18
 */
const DialogComponent: FunctionComponent<DialogMoviesInterface> =  ({
    show,
    onCloseDialog,
    poster
}) => {
    return (
        <div
            className={StringHelper.objToString({
                [style.dialog]: true,
                [style.show]: show
            })}
        >
            <div>
                <span
                    role="presentation"
                    onClick={onCloseDialog}
                    className="material-icons"
                >
                    close
                </span>
                <img src={poster} alt="Detail Movie" />
            </div>
        </div>
    );
};

export default DialogComponent;