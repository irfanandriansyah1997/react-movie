import React from 'react';
import { mount, render, shallow } from 'enzyme';

import CardComponent from '../card.component';
import style from '../style/style.module.css';

describe('Testing <CardComponent> in atomic component ', () => {
    it('Should render card component correctly', () => {
        const card = render(
            <CardComponent className="ui-atomic-card">Card content</CardComponent>
        );

        const cardWrapper = shallow(
            <CardComponent className="ui-atomic-card">Card content</CardComponent>
        );

        expect(card.hasClass('ui-atomic-card')).toBe(true);
        expect(card.hasClass(style.card)).toBe(true);
        expect(cardWrapper.children()).toHaveLength(1);
    });

    it('Card Enable Click', () => {
        const spy = jest.fn();
        const card = mount(
            <CardComponent onClick={spy}>Card content</CardComponent>
        );

        card.simulate('click');
        expect(spy).toHaveBeenCalledTimes(1);
    });

    it('Generate card snapshot', () => {
        const card = mount(
            <CardComponent className="testing-generate-class-name">
                <p>Hai</p>
                <span>Selamat Data</span>
            </CardComponent>
        );

        expect(card.html()).toMatchSnapshot();
    });
});
