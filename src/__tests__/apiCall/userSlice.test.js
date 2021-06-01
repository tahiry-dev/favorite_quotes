import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, cleanup } from '@testing-library/react';

import { Provider } from 'react-redux';
import store from '../../redux/store';
import App from '../../App';
import { login, logout } from '../../apiCall/userSlice';

afterEach(() => {
  cleanup();
});

jest.setTimeout(20000);
render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
);
describe('userSlice async actions and initial state', () => {
  test('has empty objects for user, loaders, errors in initial fase', () => {
    const { user, loaders, errors } = store.getState().user;
    expect(user).toStrictEqual({});
    expect(loaders).toStrictEqual({});
    expect(errors).toStrictEqual({});
  });

  test('login fetches the User from the API and populates the user data object', async () => {
    await store.dispatch(login({ email: 'unitTest@example.com', password: '12345678' }));
    const { user } = store.getState().user;

    expect(user.length).not.toStrictEqual(0);
  });

  test('logout clearer the User from the store', async () => {
    await store.dispatch(logout());
    const { user } = store.getState().user;

    expect(user.length).not.toStrictEqual({});
  });
});
