import styled from 'styled-components';
import { Link } from 'react-router-dom';

import background from '../containers/Home/HomePageAssets/showcase.jpg';

export const MainContainer = styled.div`
  transition: 0.1s ease-in;
  position: relative;
  box-shadow: 0px 0px 20px 1px #000000;
  left: ${({ sidebarIsOpen }) => (sidebarIsOpen ? '270px' : '0')};
  .logout {
    text-align: center;
    a {
      border-radius: 50px;
      display: inline-block;
      margin-top: 15px;
      padding: 5px 20px;
      background: rgb(233, 84, 6);
      font-size: 0.875rem;
      text-shadow: none;
      color: #fff;
    }
  }
`;

export const Container = styled.main`
  display: flex;
  justify-content: center;
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  text-align: center;
  background-image: linear-gradient(
      rgba(256, 256, 256, 0.85),
      rgba(256, 256, 256, 0.85)
    ),
    url(${background});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  .wrapper {
    margin: 0 auto;
    max-width: 300px;
    header {
      padding-top: 30px;
      margin-bottom: 15px;
      h1 {
        font-size: 2rem;
        font-weight: normal;
        margin-bottom: 10px;
      }
      p {
        padding: 0 30px;
      }
    }
    footer {
      padding-top: 15px;
      display: flex;
      justify-content: center;
      color: #919191;
    }
  }
  @media screen and (min-width: 768px) {
    .wrapper {
      padding-top: 60px;
    }
  }
`;

export const MobileContainer = styled.main`
  padding: 60px 15px 15px;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  .wrapper {
    text-align: center;
    header {
      margin-bottom: 15px;
      p {
        font-size: 0.875rem;
      }
    }
  }
`;

export const StyledLink = styled(Link)`
  font-size: 0.75rem;
`;

export const Form = styled.form`
  input,
  textarea {
    padding: 8px 30px;
    border-radius: 50px;
    margin: 8px auto;
    border: 1px solid rgba(0, 0, 0, 0.1);
    font-size: 0.75rem;
    &:focus,
    &:active {
      outline: none;
    }
  }
  &.add-quote {
    text-align: center;
    input,
    textarea {
      width: 250px;
    }
    textarea {
      border-radius: 20px;
    }
  }
  button {
    cursor: pointer;
    border-radius: 50px;
    margin-top: 10px;
    padding: 5px 20px;
    background: rgb(233, 84, 6);
    margin-right: 10px;
    font-size: 0.75rem;
    text-shadow: none;
    color: #fff;
    outline: none;
    border: none;
  }
`;

export const Account = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 90px;
  height: 100vh;
  max-height: 100%;
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 8px 6px -6px rgba(233, 84, 6, 0.8);
    padding: 30px;
    border: 1px solid rgba(233, 84, 6, 0.2);
    border-radius: 3px;
    ul li:first-child {
      text-align: center;
      img {
        margin: 10px auto;
        border-radius: 50px;
        width: 100px;
        height: 100px;
      }
    }
  }
`;