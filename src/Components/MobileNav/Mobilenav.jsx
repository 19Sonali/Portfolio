import React from 'react'
import './Mobilenav.css'
import { Link, Element } from 'react-scroll';

const Mobilenav = ({isOpen, toggleMenu}) => {
  return (
    <>
    <div
    className={`mobile-menu ${isOpen ? "active" : ""}`}
    onClick={toggleMenu}
    >
        <div className='mobile-menu-container'>
            <img className='logo ' src='./img/logo.png' alt=""/>
            <ul>
                {/* <li>
                    <a className='menu-item'> Home </a>
                </li>

                <li>
                    <a className='menu-item'> Skills </a>
                </li>

                <li>
                    <a className='menu-item'> Internships </a>
                </li>

                <li>
                    <a className='menu-item'> Projects </a>
                </li>

                <button className='contact-btn' onClick={() => {}}>
                Contact 
                </button> */}
                <li>
                        {/* <a className='menu-item' onClick={Heroa}>Home</a> */}
                        <Link to="home" spy={true} smooth={true} duration={500} className='menu-item'>
        Home
      </Link>
                    </li>
                    
                    <li>
                    {/* <a className='menu-item'onClick={Skills}>Skills</a> */}
                    <Link to="skills" spy={true} smooth={true} duration={500} className='menu-item'>
        Skills
      </Link>
                    </li>
                    <li>
                    {/* <a className='menu-item'>Internships</a> */}
                    <Link to="education" spy={true} smooth={true} duration={500} className='menu-item'>
        Education
      </Link>
                    </li>
                    <li>
                    {/* <a className='menu-item'>Internships</a> */}
                    <Link to="internship" spy={true} smooth={true} duration={500} className='menu-item'>
        Internship
      </Link>
                    </li>
                    <li>
                    {/* <a className='menu-item'>Projects</a> */}
                    <Link to="projects" spy={true} smooth={true} duration={500} className='menu-item'>
        Projects
      </Link>
                    </li>
                    <Link to="contact" spy={true} smooth={true} duration={500} className='menu-item'>
                    <button className='contact-btn' onClick={() => {}}>
                        Contact
                    </button>
      </Link>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Mobilenav