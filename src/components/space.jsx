import React from 'react';
import styled from 'styled-components';
import spaceImg from '../assets/images/spacecame.jpg'
import {  ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';

const StyledSpace = styled.div`
    .quiete  {
        height: 100vh;
        width: 100%;
        display: flex;
        position: relative;
        align-items: center;
        justify-content: center;
        z-index: 1;
        h3 {
            position: absolute;
            bottom: 40px;
        }
    }

@media (max-width: 768px) {
    .quiete__title{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    }
`;


function Space () {
    return ( 
        <StyledSpace>
            <ParallaxBanner className='quiete'>
                <ParallaxBannerLayer image={spaceImg} speed={-20} />
                <h3 className='quiete__title'>ESPACES CALMES</h3>
            </ParallaxBanner>
        </StyledSpace>
    )
}

export default Space;