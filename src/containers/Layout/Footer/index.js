import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import logo from '../../Home/HomePageAssets/logo.png';
import { Container, Logo } from './Footer.styled';

const Footer = () => (
  <Container>
    <Logo to="/">
      <img src={logo} alt="brand logo" width="100" />
      <p className="logo-title">Quotes</p>
    </Logo>

    <address>
      Mahazoarivo Nord Antsirabe
      <br />
      Madagascar
      <br />
      +261 00 00 240 06
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
