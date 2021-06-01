import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, cleanup, screen } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import App from '../../App';

jest.setTimeout(20000);
describe('quotes page', () => {
    afterEach(() => {
        cleanup();
    });

    test('has a quotes title and a total section for the slider', async () => {
        const history = createMemoryHistory();
        history.push('/quotes');

        const { getByText, getAllByText } = render(
            <Provider store={store}>
                <Router history={history}>
                    <App />
                </Router>
            </Provider>,
        );

        expect(typeof getAllByText(/Quotes/i)).toStrictEqual('object');
        expect(getAllByText(/Quotes/i).length).toBeGreaterThanOrEqual(1);
        expect(getByText(/total/i)).toBeTruthy();
    });

    test('has a list of quotes after the load', async () => {
        const history = createMemoryHistory();
        history.push('/quotes');

        render(
            <Provider store={store}>
                <Router history={history}>
                    <App />
                </Router>
            </Provider>,
        );

        const result = await screen.findAllByAltText(/quote/i);
        expect(typeof result).toStrictEqual('object');
        expect(result.length).toBeGreaterThanOrEqual(1);
    });
});