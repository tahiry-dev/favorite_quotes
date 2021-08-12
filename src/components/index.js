import React, { useEffect } from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Home from '../containers/Home';
import Quotes from './Quotes';
import QuoteDetails from './Quotes/QuoteDetails';
import QuoteCreations from './Quotes/QuoteCreations';
import Favorites from './Quotes/Favorites';
import Login from './Login';
import SignUp from './Signup';
import Dashboard from '../containers/Dashboard_index/index';
import UserDetails from './UserDetails';
import Help from './Help';
import { loginFromStorage } from '../apiCall/userSlice';

const Main = () => {
  const loggedIn = useSelector(state => state.user.loggedIn);

  const dispatch = useDispatch();
  /* eslint-disable no-unused-expressions */
  useEffect(() => {
    if (!loggedIn) {
      const userData = localStorage.getItem('currentUser');
      userData && dispatch(loginFromStorage(userData));
    }
  }, [dispatch, loggedIn]);
  /* eslint-enable no-unused-expressions */

  return (
    <>
      <Switch>
        <Route exact path="/login">
          {loggedIn ? <Redirect to="/" /> : <Login />}
        </Route>
        <Route exact path="/sign_up">
          {loggedIn ? <Redirect to="/" /> : <SignUp />}
        </Route>
        <Route exact path="/dashboard">
          {loggedIn ? <Dashboard /> : <Redirect to="/login" />}
        </Route>
        <Route exact path="/creations">
          {loggedIn ? <QuoteCreations /> : <Redirect to="/login" />}
        </Route>
        <Route exact path="/favorites">
          {loggedIn ? <Favorites /> : <Redirect to="/login" />}
        </Route>
        <Route exact path="/account">
          {loggedIn ? <UserDetails /> : <Redirect to="/login" />}
        </Route>
        <Route exact path="/quotes" component={Quotes} />
        <Route exact path="/help" component={Help} />
        <Route exact path="/quotes/:id" component={QuoteDetails} />
        <Route path="*" component={Home} />
      </Switch>
    </>
  );
};

export default Main;
