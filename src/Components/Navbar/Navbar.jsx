import React from 'react'
import './Navbar.css'
import Mobilenav from '../MobileNav/Mobilenav';
import { useState } from 'react';

import Heroa from '../Hero/Heroa';
import Skills from '../Skills/Skills';
import { Link, Element } from 'react-scroll';

export const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };
    
  return (
    
    <>
        <Mobilenav isOpen={openMenu} toggleMenu={toggleMenu}/>
        <nav className='nav-wrapper'>
            <div className='nav-content'>
                <img className='logo' src='./img/logo.png' alt=''/>

                <ul>
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

                <button class="menu-btn" onClick={toggleMenu}>
                    <span
                    class={"material-symbols-outlined"}
                    style={{fontSize: "1.8rem"}}
                    >
                        {openMenu ? "close" : "menu"}
                    </span>
                </button>

            </div>
        </nav>
    
    </>
  )
}
