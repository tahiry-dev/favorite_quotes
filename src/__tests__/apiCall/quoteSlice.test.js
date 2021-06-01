import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, cleanup } from '@testing-library/react';

import { Provider } from 'react-redux';
import store from '../../redux/store';
import App from '../../App';
import { getQuotes, getQuote } from '../../apiCall/quoteSlice';

jest.setTimeout(20000);
afterEach(() => {
    cleanup();
});

render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
);

describe('QuoteSlice async actions and initial state', () => {
    test('has no Quotes in the array in the initial fase', () => {
        const { Quotes } = store.getState().quote;
        expect(Quotes).toStrictEqual(undefined);
    });


    test('has a default empty Quote object in the initial fase', () => {
        const defaultEmptyQuote = { user: {}, favorited_by: [] };
        const { Quote } = store.getState().quote;
        expect(Quote).toStrictEqual(undefined);
    });
});