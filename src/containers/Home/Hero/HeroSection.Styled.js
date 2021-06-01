import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

export const HeroContainer = styled.section`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 90vh;
  position: relative;
  z-index: 1;
  @media screen and (max-width: 767px) {
   height: 45vh;
 }

 @media (min-width:768px) and (max-width:1076px) {
    height: 50vh;
}
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fafafa;
  overflow: hidden;
`;

export const HeroContent = styled.div`
  z-index: 5;
  color: #fff;
  line-height: 0.9;
  text-shadow: 3px 4px 7px rgba(81, 67, 21, 0.8);
  margin-left: -60%;
  margin-bottom: 5%;
  width: 30%;
  figure {
    line-height: 1.2;
    margin-bottom: 15px;
    font-size: 1.2rem;
  }
  h1 {
    margin-bottom: 7px;
  }
  .actions {
    text-transform: uppercase;
    font-size: 0.875rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2px;
    margin-left: -50px;
  }
  @media screen and (max-width: 767px) {
     width: 100%;
     margin: 0 auto;
     
    blockquote {
      margin-top: 30px;
      font-size: 14px;
    }
    figcaption  {
        font-size: 12px;
     }
     .hero-header h1 {
        display: none;
     }
  }
  @media (min-width:768px) and (max-width:1076px) {
    width: 50%;
    margin-left: -50%;
  }
`;

export const Button = styled(Link)`
  border-radius: 50px;
  padding: 5px 20px;
  background: rgb(233, 84, 6);
  margin-right: 10px;
  font-size: 0.675rem;
  text-shadow: none;
 
  @media (min-width:768px) and (max-width:1076px) {
   padding: 2px 5px;
  }
`;

export const VideoLink = styled.a`
  display: flex;
  align-items: center;
  font-size: 0.675rem;
  & > :first-child {
    margin-right: 5px;
    font-size: 25px;
  }
`;

export const DownArrow = styled(ScrollLink)`
  position: absolute;
  bottom: 30px;
  right: calc(50% - 20px);
  color: rgba(256, 256, 256, 0.5);
  font-size: 30px;
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
  }
  & > :first-child {
    font-size: 2.5rem;
  }
  @media screen and (max-width: 767px) {
    position: absolute;
    bottom: -15px;
    right: calc(50% - 20px);
 }
`;
