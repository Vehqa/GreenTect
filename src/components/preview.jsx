import styled from 'styled-components';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import resi from '../assets/images/residential.png'
import { useParallax } from 'react-scroll-parallax';


const StyledPrview = styled.div `
    .preview__title {
        margin: var(--xxxl-sizing);
        margin-top: var(--default-sizing);
        z-index: -1;
        padding-top: var(--default-sizing);
    }

    .preview__showcase{
        display: flex;
        justify-content: space-between;
        margin-left: var(--xl-sizing);
        margin-right: var(--xl-sizing);
        &-img {
            width: 820px;
        }
    }

    .preview__title-bold {
        font-weight: bolder;
    }

    .preview__list {
        display: flex;
        flex-direction: column;
        gap: var(--xs-sizing);
        li {
            font-size: 24px;
        }
    }

    .preview__list-link {
        color: darkgrey;
    }

    .preview__subtitle {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding-left: var(--default-sizing);
        padding-right: var(--default-sizing);
        &-title {
            font-size: 32px;
            font-weight: bolder;
        }
        &-next {
            color: darkgrey;
        }
    }
`;

function Preview () {
    const parallax = useParallax({
            speed: -10,
        });
    useEffect(() => {
        AOS.init({
            duration: 1000,
            });
        }, []);
    return (
    <StyledPrview className='preview' ref={parallax.ref}> 
        <div className='preview__title'>
            <h3>Une maison</h3>
            <h3 className='preview__title-bold'>Résidentiel.</h3>
        </div>
        <div className='preview__showcase'  >
            <div  >
                <ul className='preview__list' data-aos="zoom-in">
                    <li>Résidentiel</li>
                    <li className='preview__list-link'>Musées</li>
                    <li className='preview__list-link'>Librairies</li>
                    <li className='preview__list-link'>Educations</li>
                </ul>
            </div>
            <div data-aos="zoom-in" className='preview__showcase-images'>
                <img className='preview__showcase-img' src={resi}  alt='maison résidentiel'></img>
                <p className='preview__subtitle-title' >La Maison cube de bois</p>
                <a href='/' className='preview__subtitle-next' data-aos="slide-up">En savoir plus </a>
            </div> 
        </div>
    </StyledPrview>
    )
}

export default Preview;