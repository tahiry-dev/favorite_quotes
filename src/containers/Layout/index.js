import React, { useState } from 'react';

import PropTypes from 'prop-types';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
import { MainContainer } from '../../components/Styles.styled';

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Effects
  const toggle = () => setIsOpen(isOpen => !isOpen);

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <MainContainer sidebarIsOpen={isOpen}>
        <Navbar sidebarIsOpen={isOpen} toggle={toggle} />
        {children}
        <Footer />
      </MainContainer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default Layout;
