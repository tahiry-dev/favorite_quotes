import { useState } from 'react';
import PropTypes from 'prop-types';

import MobileNavbar from './Navbar/MobileNavbar';
import Sidebar from './Sidebar';

import { MainContainer } from '../../components/Styles.styled';

const MobileLayout = ({ children, quotePage = false, title }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((isOpen) => !isOpen);

  console.log(`quotePage`, quotePage)
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <MainContainer sidebarIsOpen={isOpen}>
        <MobileNavbar
          sidebarIsOpen={isOpen}
          toggle={toggle}
          quotePage={quotePage}
          title={title}
        />
        {children}
      </MainContainer>
    </>
  );
};

MobileLayout.propTypes = {
  quotePage: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default MobileLayout;
