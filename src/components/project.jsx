import styled from 'styled-components';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import project1 from '../assets/images/project1.png'
import project2 from '../assets/images/project2.png'
import project3 from '../assets/images/project3.png'
import project4 from '../assets/images/project4.png'
import next from '../assets/images/next.png'



const StyledProject = styled.div `
    section.project {
        display: flex;
        flex-direction: column;
        padding-bottom: var(--xl-sizing);

        .project__title {
            padding-left : 140px;
            padding-top: var(--default-sizing);
            padding-bottom: var(--default-sizing);
        }
        
        .project__title-bold {
            font-weight: bolder;
        }

        .project__list {
            display: flex;
            width: 100%;
            justify-content: center;
        }

        .project__list-text {
            width: 315px;
            height: 315px;
            position: relative;
            h4 {
                padding: var(--s-sizing);
            }
            a {
                position: absolute;
                bottom: var(--s-sizing);
                right: var(--s-sizing);
            }
        }

@media (max-width: 768px) {
    .project__list {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        }
    }

    }
`
;

function Project() {
    useEffect(() => {
        AOS.init({
            duration: 1500,
        });
    }, []);
    return (
        <StyledProject>
            <section className='project'>
                <div className='project__title'>
                    <h2 className='project__title-head'>NOS DERNIERS</h2>
                    <h2 className='project__title-bold'>PROJETS.</h2>
                </div>
                <div className='project__list' data-aos="fade-right">
                    <div className='project__list-text' data-aos="fade-right">
                        <h4>Maison dans les arbres</h4>
                        <a href='/'><img src={next} alt='next' data-aos="fade-right"></img></a>
                    </div>
                    <div className='project__list-img' data-aos="fade-right"> 
                        <img src={project1} alt='treehouse' data-aos="fade-right"></img>
                    </div>
                    <div className='project__list-text' data-aos="fade-right">
                        <h4>Maison calmes</h4>
                        <a href='/'><img src={next} alt='next'></img></a>
                    </div>
                    <div className='project__list-img' data-aos="fade-right">
                        <img src={project2} alt='treehouse' data-aos="fade-right"></img>
                    </div>
                </div>


                <div className='project__list' data-aos="fade-left">
                    <div className='project__list-img' data-aos="fade-left">
                        <img src={project3} alt='treehouse' data-aos="fade-left"></img>
                    </div>
                    <div className='project__list-text' data-aos="fade-left">
                        <h4>Maison française</h4>
                        <a href='/'><img src={next} alt='next'></img></a>
                    </div>
                    <div className='project__list-img' data-aos="fade-left">
                        <img src={project4} alt='treehouse' data-aos="fade-left"></img>
                    </div>
                    <div className='project__list-text' data-aos="fade-left">
                        <h4>Maison flottante</h4>
                        <a href='/'><img src={next} alt='next'></img></a>
                    </div>
                </div>
            </section>
        </StyledProject>
    )
}

export default Project;