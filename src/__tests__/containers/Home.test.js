import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, cleanup } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import App from '../../App';

describe('Contact page', () => {
    afterEach(() => {
        cleanup();
    });


    test('has a dashboard button in the dashboard section', async () => {
        const history = createMemoryHistory();
        history.push('/');

        const { getByText } = render(
            <Provider store={store}>
                <Router history={history}>
                    <App />
                </Router>
            </Provider>,
        );

        expect(getByText(/dashboard/i)).toBeTruthy();
    });

    test('has a browse crafts button in the designers section', async () => {
        const history = createMemoryHistory();
        history.push('/');

        const { getByText } = render(
            <Provider store={store}>
                <Router history={history}>
                    <App />
                </Router>
            </Provider>,
        );

        expect(getByText(/browse quotes/i)).toBeTruthy();
    });

    test('has a real life stories section', async () => {
        const history = createMemoryHistory();
        history.push('/');

        const { getByText } = render(
            <Provider store={store}>
                <Router history={history}>
                    <App />
                </Router>
            </Provider>,
        );

        expect(getByText(/real life stories/i)).toBeTruthy();
    });

    test('has a start free button', async () => {
        const history = createMemoryHistory();
        history.push('/');

        const { getByText } = render(
            <Provider store={store}>
                <Router history={history}>
                    <App />
                </Router>
            </Provider>,
        );

        expect(getByText(/start free/i)).toBeTruthy();
    });

    test('has a footer section with the text all right reserved', async () => {
        const history = createMemoryHistory();
        history.push('/');

        const { getByText } = render(
            <Provider store={store}>
                <Router history={history}>
                    <App />
                </Router>
            </Provider>,
        );

        expect(getByText(/All rights reserved/i)).toBeTruthy();
    });
});