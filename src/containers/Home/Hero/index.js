import React from 'react';
import { FaPlayCircle, FaChevronDown } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import ImgBackground from '../HomePageAssets/zenBackground.jpg';
import {
  HeroContainer,
  HeroBg,
  HeroContent,
  Button,
  VideoLink,
  DownArrow,
} from './HeroSection.Styled';

const HeroSection = () => (
  <HeroContainer>
    <HeroBg>
      <img src={ImgBackground} alt="hero background" />
    </HeroBg>
    <HeroContent>
      <div className="hero-header">
        <h1>Quote of the Day</h1>
        <figure>
          <blockquote>
            Choose a Job you Love, and you Will Never Have to Work a Day
            in Your Life
            <figcaption>
              &mdash; Confucius
            </figcaption>
          </blockquote>
        </figure>
      </div>
      <div className="actions">
        <Button to="/sign_up">Share Your Quote</Button>
        <VideoLink
          href="https://www.youtube.com/watch?v=tbnzAVRZ9Xc"
          target="_blank"
          rel="noreferrer"
        >
          <FaPlayCircle />
          {' '}
          Inspiring Video
        </VideoLink>
      </div>
    </HeroContent>
    <IconContext.Provider value={{ color: 'white', opacity: 2 }}>
      <DownArrow to="dashboard">
        <FaChevronDown />
      </DownArrow>
    </IconContext.Provider>
  </HeroContainer>
);

export default HeroSection;
