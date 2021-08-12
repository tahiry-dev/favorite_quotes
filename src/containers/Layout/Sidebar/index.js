import React, { useEffect, useState } from 'react';

import jwtDecode from 'jwt-decode';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';

import { logout } from '../../../apiCall/userSlice';
import logo from '../../Home/HomePageAssets/logo.png';

import {
  SidebarContainer,
  SidebarMenu,
  SidebarLink,
  SidebarItem,
  SidebarLogo,
  SidebarProfile,
  SpecialLink,
  AnchorLink,
  Divider,
  PlusIcon,
} from './SideBar';

const Sidebar = ({ isOpen, toggle }) => {
  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    /* eslint-disable no-empty */
    try {
      const userInfo = jwtDecode(localStorage.getItem('currentUser'));
      setUserInfo(userInfo);
    } catch (e) { }
  }, []);
  /* eslint-enable no-empty */

  const loggedIn = useSelector(state => state.user.loggedIn);
  const user = userInfo;
  const quotesCount = useSelector(state => state.quote.quotes.length);
  const createdCount = useSelector(
    state => state.quote.quotes.filter(quote => quote.user_id === user.user_id).length,
  );

  const favorited = useSelector(state => state.quote.quotes
    .filter(quote => quote.favorited_by
      .some(favorite => favorite.id === user.user_id)));

  const favoritedCount = favorited.length;

  const history = useHistory();
  const dispatch = useDispatch();
  const handleLogout = e => {
    e.preventDefault();
    dispatch(logout());
    history.push('/');
  };

  const { name, nickname } = user;

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      {loggedIn ? (
        <>
          <SidebarProfile>
            <img
              src="http://unsplash.it/100/100?gravity=center"
              alt="Random unsplash img"
              width="50"
              height="50"
            />
            <h3>{name}</h3>
            <p>
              @
              {nickname}
            </p>
          </SidebarProfile>

          <SidebarMenu>
            <SidebarItem>
              <SidebarLink to="/dashboard">
                Add quote
                {' '}
                <PlusIcon />
              </SidebarLink>
            </SidebarItem>
            <SidebarItem>
              <SidebarLink to="/quotes">
                quotes
                {' '}
                <span>{quotesCount}</span>
              </SidebarLink>
            </SidebarItem>
            <SidebarItem>
              <SidebarLink to="/creations">
                My added quotes
                {' '}
                <span>{createdCount}</span>
              </SidebarLink>
            </SidebarItem>
            <SidebarItem>
              <SidebarLink to="/favorites">
                My favorites
                {' '}
                <span>{favoritedCount}</span>
              </SidebarLink>
            </SidebarItem>
            <SidebarItem>
              <SidebarLink to="/account">Account</SidebarLink>
            </SidebarItem>
          </SidebarMenu>

          <Divider />
          <SidebarMenu>
            <SidebarItem>
              <AnchorLink onClick={handleLogout}>Logout</AnchorLink>
            </SidebarItem>
          </SidebarMenu>
        </>
      ) : (
        <SidebarMenu>
          <SidebarItem>
            <SidebarLink to="/quotes">Quotes</SidebarLink>
          </SidebarItem>
          <SidebarItem>
            <SidebarLink to="/login">Login</SidebarLink>
          </SidebarItem>
          <SidebarItem>
            <SpecialLink to="/sign_up">Sign up</SpecialLink>
          </SidebarItem>
        </SidebarMenu>
      )}
      <SidebarLogo to="/">
        <img src={logo} alt="brand logo" width="50" />
        Quotes
      </SidebarLogo>
    </SidebarContainer>
  );
};

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default Sidebar;
