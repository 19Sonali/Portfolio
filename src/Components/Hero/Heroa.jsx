import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import "./Heroa.css";
import { Element } from "react-scroll";

const Heroa = () => {
  return (
    <Element name="home">
      <section className="hero-container">
        <div className="hero-content">
          <h3>Hi, myself</h3>
          <h1>Sonali S</h1>
          <h3>
            And I'm a <span>Frontend Developer</span>
          </h3>
          <p>
            A Computer Science and Business Systems student from St Joseph
            Engineering College.With a keen interest in web development, I am
            passionate about creating dynamic and user-friendly websites.
          </p>
          <div className="social-media">
            <a
              href="https://www.linkedin.com/in/sonali-s-740326254/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="https://www.instagram.com/sonali_sona19/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://github.com/19Sonali"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
          {/* <a href="" className='cv-btn'>Download Resume</a> */}
          <a href="./Resume.pdf" className="cv-btn" download>
            Download Resume
          </a>
        </div>
        {/* <div className="home-img">
          <img src="./img/profile.png" alt="" />
        </div> */}
      </section>
    </Element>
  );
};

export default Heroa;
