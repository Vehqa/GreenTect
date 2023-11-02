import styled from 'styled-components';
import React from 'react';


const StyledFooter = styled.div `
section.footer {
    width: 100vw;
    height: auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-top: var(--xxxl-sizing);
    padding-bottom: var(--default-sizing);

    .footer__title-bar {
        text-decoration: line-through;
    }

    .footer__title {
        margin-bottom: var(--s-sizing);
        font-size: 35px;
        text-decoration: underline;
    }


}
`
;

function Footer () {
    return (
        <StyledFooter>
            <section className='footer'>
                <div className='footer__title'>
                    <h3 className='footer__title-bar'>Archi</h3>
                    <h3 >Greentect</h3>
                </div>
                <div>
                    <h5 className='footer__title'>A propos : </h5>
                    <ul className=''>
                        <li> Qui sommes nous ? </li>
                        <li> Nos offres </li>
                        <li> Blog </li>
                        <li> Nous contactez </li>
                    </ul>
                </div>
                <div>
                <h5 className='footer__title' >Suivez-nous </h5>
                    <ul>
                        <li> Twitter </li>
                        <li> Instagram </li>
                        <li> Facebook </li>
                        <li> Mail </li>
                    </ul>
                </div>
            </section>
        </StyledFooter>
    )
}

export default Footer;