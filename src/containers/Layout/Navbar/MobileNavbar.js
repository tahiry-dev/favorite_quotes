import React, { useState, useEffect } from 'react';

import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { FaArrowLeft, FaBars, FaSearch } from 'react-icons/fa';
import PropTypes from 'prop-types';

import {
  Nav,
  NavContainer,
  MobileNavMenu,
  NavLink,
  SpecialLink,
  MobileIcon,
} from './NavElements';

const MobileNavbar = ({
  toggle, sidebarIsOpen, quotePage, title,
}) => {
  const loggedIn = useSelector(state => state.user.loggedIn);
  const quoteName = useSelector(state => state.quote.quote.name);
  const [scrolled, setScrolled] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const scrollEvent = document.addEventListener('scroll', () => {
      const scrolledY = document.scrollingElement.scrollTop;
      if (scrolledY > 80 && !scrolled) {
        setScrolled(true);
      } else if (scrolledY < 80 && scrolled) {
        setScrolled(false);
      }
    });
    return () => {
      document.removeEventListener('scroll', scrollEvent);
    };
  }, [scrolled]);

  const goBack = e => {
    e.preventDefault();
    history.goBack();
  };

  return (
    <>
      <Nav sidebarIsOpen={sidebarIsOpen} scrolled={scrolled} mobileView>
        <NavContainer>
          {quotePage ? (
            <MobileIcon onClick={goBack}>
              <FaArrowLeft />
            </MobileIcon>
          ) : (
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
          )}
          <h3>{quoteName && quotePage ? quoteName : title}</h3>
          <MobileIcon className="search">
            <FaSearch />
          </MobileIcon>
          <MobileNavMenu>
            {loggedIn ? (
              <>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/login">Login</NavLink>
                </li>
                <li>
                  <NavLink to="/sign_up">
                    <SpecialLink>Sign up</SpecialLink>
                  </NavLink>
                </li>
              </>
            )}
          </MobileNavMenu>
        </NavContainer>
      </Nav>
    </>
  );
};

MobileNavbar.propTypes = {
  quotePage: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  sidebarIsOpen: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
};

export default MobileNavbar;
