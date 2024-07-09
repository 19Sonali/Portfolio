import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faGithub   } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
   <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">
          Sonali S
        </h1>
        <div className="footer__social">
        <a href="https://www.linkedin.com/in/sonali-s-740326254/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} /></a>
                <a href="https://www.instagram.com/sonali_sona19/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="https://github.com/19Sonali" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} />
                </a>
        </div>
      </div>
   </footer>
  )
};

export default Footer