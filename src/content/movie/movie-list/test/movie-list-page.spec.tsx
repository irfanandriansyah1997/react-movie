import React from 'react';
import { mount } from 'enzyme';

import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import MovieListPage from '../movie-list.page';
import StoreBuilder from '../../../../shared/modules/redux/builder/store.builder';

describe('Testing Snapshot Pages', () => {
    it('should render card movie and search bar', (done: () => void) => {
        const store = StoreBuilder.singleton();

        const pages = mount(
            <HashRouter>
                <Provider store={store}>
                    <MovieListPage />
                </Provider>
            </HashRouter>
        );

        setTimeout(() => {
            expect(pages.html()).toMatchSnapshot();
            done();
        }, 3000) 

    });
});