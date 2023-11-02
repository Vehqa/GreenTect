import './styles/App.scss';
import React from 'react';
import styled from 'styled-components';
import backgroundImg from './assets/images/test.jpg'
import Project from './components/project';
import Preview from './components/preview';
import Footer from './components/footer';
import Space from './components/space';
import {  ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';

const StyledHome = styled.div`
  .hero {
    position: relative; /* Add relative positioning to create a positioning context */
    width: 100vw;
    height: 100vh;

    .hero__content {
      position: absolute; /* Add absolute positioning to position text */
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-end;
    }

    .hero__title {
      padding: var(--default-sizing);
    }

    .hero__title-bar {
      text-decoration: line-through;
    }

    .hero__button {
      padding: var(--default-sizing);
    }

    .hero__button-style {
      width: 150px;
      height: 40px;
      color: black;
      font-weight: bolder;
      border-radius: 20px;
      background-color: white;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    /* Styles pour les écrans de petite taille (par exemple, les smartphones) */
@media (max-width: 768px) {
    .hero__content {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;
    }
    .hero__banner {
      background-size: cover;
      background-repeat: no-repeat;
      height: 100vh;
    }
    }
  }
`;

function Home() {
  return (
    <StyledHome>
      <ParallaxBanner className='hero'>
        <ParallaxBannerLayer image={backgroundImg} speed={-20} style={{ backgroundSize: 'contain' }} className='hero__banner' />
        <div className='hero__content'>
          <div className='hero__title'>
            <h2 className='hero__title-bar'>Archi</h2>
            <h2>GreenTect</h2>
          </div>
          <div className='hero__button'>
            <a className='hero__button-style' href='/'>Nous Contacter</a>
          </div>
        </div>
      </ParallaxBanner>
      <Project />
      <Space />
      <Preview />
      <Footer />
    </StyledHome>
  );
}

export default Home;

