import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, cleanup } from '@testing-library/react';

import { Provider } from 'react-redux';
import store from '../redux/store';
import App from '../App';

afterEach(() => {
    cleanup();
});

test('renders the home page with no errors', () => {
    const { getAllByText } = render(
        <Provider store={store}>
            <Router>
                <App />
            </Router>
        </Provider>,
    );

    expect(typeof getAllByText(/Quotes/i)).toStrictEqual('object');
    expect(getAllByText(/Quotes/i).length).toBeGreaterThanOrEqual(1);
});

