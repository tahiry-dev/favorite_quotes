import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import logo from '../../../assets/logo.png';
import { Container, Logo } from './Footer.styled';

const Footer = () => (
    <Container>
        <Logo to="/">
            <img src={logo} alt="brand logo" width="100" />
      Crafts
    </Logo>

        <address>
            Mahazoarivo Nord Antsirabe
      <br />
        Madagascar
      <br />
      +261 32 04 240 06
    </address>

        <ul>
            <li>
                <FaFacebook />
            </li>
            <li>
                <FaTwitter />
            </li>
            <li>
                <FaInstagram />
            </li>
        </ul>

        <p>Favorite Quotes 2021, All rights reserved</p>
    </Container>
);

export default Footer;