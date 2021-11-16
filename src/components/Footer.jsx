import React from 'react';
import gmail from '../images/gmail.png'
import linkedin from '../images/linkedin.png'
import whatsapp from '../images/whatsapp.png'
import github from '../images/github.png'

const Footer = () =>{
    return(
        <footer id='contact'>
            <h2 className="footer__title">Contacto</h2>
            <h3 className="footer__second-title">Puedes escribirme para hablar sobre lenguaje o darme feedback sobre mi web y con gusto te respondo.
                    </h3>
            <div className="footer">
                <div className="footer__network">
                    <img src={whatsapp} alt="whatsapp logo" /><p className="footer__network-text">+54 9 2657-285729</p>
                </div>
                <div className="footer__network">
                    <img src={gmail} alt="g-mail logo" /><a rel="noreferrer" target='_blank' href='mailto:juarezignacioemiliano@gmail.com' className="footer__network-text">juarezignacioemiliano<br className='footer__carriage-return--display'/>@gmail.com</a>
                </div>
                <div className="footer__network">
                    <img src={linkedin} alt="linkedin logo" /><a rel="noreferrer" target='_blank' href="https://www.linkedin.com/in/ignacio-emiliano-juarez/" className="footer__network-text">/ignacio-emiliano-juarez/</a>
                </div>
                <div className="footer__network">
                    <img src={github} alt="github logo" /><a rel="noreferrer" target='_blank' href="https://github.com/emij7" className="footer__network-text">github.com/emij7</a>
                </div>
            </div>
                <div className='footer__back-to-top-link'>
                    <a  href="#navbar">Volver arriba.</a>
                </div>
        </footer>
    )
}

export default Footer;