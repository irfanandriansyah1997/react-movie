import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import MovieDetailPage from '../movie-detail.page';
import StoreBuilder from '../../../../shared/modules/redux/builder/store.builder';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
    useParams: (): Record<string, string> => ({
        id: 'tt1569923',
        teamId: 'team-id1',
    })
}));

describe('Testing Snapshot Pages', () => {
    it('should render card movie and search bar', (done: () => void) => {
        const store = StoreBuilder.singleton();

        const pages = mount(
            <HashRouter>
                <Provider store={store}>
                    <MovieDetailPage />
                </Provider>
            </HashRouter>
        );

        setTimeout(() => {
            expect(pages.html()).toMatchSnapshot();
            done();
        }, 3000);
    });
});