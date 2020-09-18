/* eslint-disable jsx-a11y/label-has-associated-control */
import React, {
    FunctionComponent,
    RefObject,
    useEffect,
    useRef,
    useState
} from 'react';

import { HeaderPropsInterface } from './interface/component.interface';

import style from './style/style.module.css';

/**
 * Header Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.09.18
 */
const HeaderComponent: FunctionComponent<HeaderPropsInterface> = ({
    value,
    onChange
}) => {
    const [valueTextTmp, setValueTextTmp] = useState<string>('');
    const input = useRef<HTMLInputElement>();

    useEffect(() => {
        setValueTextTmp(value);
    }, [value]);

    /**
     * On Key Up
     * @param {React.KeyboardEvent<HTMLInputElement>} event 
     */
    const onKeyUp = (
        { key }: React.KeyboardEvent<HTMLInputElement>
    ): void => {
        if (key === 'Enter' && valueTextTmp.length > 0) {
            onChange(valueTextTmp);
        } else if (key === 'Enter' && valueTextTmp.length === 0) {
            // eslint-disable-next-line no-alert
            alert('Search Bar Is Null');
        }
    };

    return (
        <>
            <div className={style.firstRow}>
                <div className="ui-container" />
            </div>
            <div className={style.secondRow}>
                <div className="ui-container">
                    <div className={style.input}>
                        <label htmlFor="search">
                            <span className="material-icons">
                                search
                            </span>
                        </label>
                        <input
                            id="search"
                            type="text"
                            ref={input as RefObject<HTMLInputElement>}
                            autoComplete="off"
                            placeholder="Ketikan Film Yang Akan Anda Cari"
                            value={valueTextTmp}
                            onChange={(e): void => {
                                setValueTextTmp(e.currentTarget.value);
                            }}
                            onKeyUp={onKeyUp}
                        />
                        <button
                            type="button"
                        >
                            Cari Film
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeaderComponent;