import React from 'react';
import { mount } from 'enzyme';

import HeaderComponent from '../header.component';

describe('Testing <HeaderComponent> in molecules component ', () => {
    beforeEach(() => {
        global.alert = jest.fn();
    });

    it('Should render header component correctly', () => {
        const header = mount(
            <HeaderComponent
                onChange={jest.fn()}
                value="Batman"
            />
        );

        expect(header.find('.ui-container').length).toBe(2);
        expect(header.find('input').at(0).props().value).toBe('Batman');
    });

    it('Onchange Scenario', () => {
        const spy = jest.fn((x) => x);
        const header = mount(
            <HeaderComponent
                onChange={spy}
                value="Batman"
            />
        );
        expect(header.find('input').at(0).props().value).toBe('Batman');
        expect(spy).toHaveBeenCalledTimes(0);

        header.find('input').at(0).simulate('change', {
            target: { value: 'Bats' }
        });
        header.find('input').at(0).simulate('keyUp', {
            key: 'Enter'
        });
        expect(spy).toHaveBeenCalledTimes(1);
    });

    it('Onchange Scenario With Text Is Null', () => {
        const spy = jest.fn((x) => x);
        const header = mount(
            <HeaderComponent
                onChange={spy}
                value=""
            />
        );

        expect(global.alert).toHaveBeenCalledTimes(0);
        expect(spy).toHaveBeenCalledTimes(0);
        
        header.find('input').at(0).simulate('keyUp', {
            key: 'Enter'
        });
        expect(spy).toHaveBeenCalledTimes(0);
        expect(global.alert).toHaveBeenCalledTimes(1);
    });
});
