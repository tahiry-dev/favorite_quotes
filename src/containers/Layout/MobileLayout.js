import { useState } from 'react';
import PropTypes from 'prop-types';

import MobileNavbar from './Navbar/MobileNavbar';
import Sidebar from './Sidebar';

import { MainContainer } from '../../components/Styles.styled';

const MobileLayout = ({ children, quotePage, title }) => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(isOpen => !isOpen);

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
    title: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
};

export default MobileLayout;