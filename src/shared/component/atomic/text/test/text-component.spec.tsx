import React from 'react';
import { mount } from 'enzyme';

import TextComponent from '../text.component';

describe('Testing <TextComponent> in atomic component ', () => {
    it('Generate text snapshot 1', () => {
        const card = mount(
            <TextComponent
                className="testing-generate-class-name"
                styling="default"
                color="#000"
                fontWeight={700}
                align="center"
            >
                Text Default With Black Color
            </TextComponent>
        );

        expect(card.html()).toMatchSnapshot();
    });

    it('Generate text snapshot 2', () => {
        const card = mount(
            <TextComponent
                className="testing-generate-class-name"
                styling="caption"
                color="#69acec"
                fontWeight={500}
                align="right"
            >
                Text Caption With Blue Color
            </TextComponent>
        );

        expect(card.html()).toMatchSnapshot();
    });

    it('Generate text snapshot 2', () => {
        const card = mount(
            <TextComponent
                className="testing-generate-class-name"
                styling="heading"
                color="#f0f0f0"
                fontWeight={400}
                align="left"
            >
                Text Heading With Whitesmoke
            </TextComponent>
        );

        expect(card.html()).toMatchSnapshot();
    });
});
