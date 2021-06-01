import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, cleanup } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import App from '../../App';

describe('Quote page', () => {
  afterEach(() => {
    cleanup();
  });

  test('display quote image', async () => {
    const history = createMemoryHistory();
    history.push('/quotes/10');

    render(
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>,
    );
  });
});
