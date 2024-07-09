import React from 'react'
import './ContactMe.css'
import ContactInfoCard from './ContactInfoCard/ContactInfoCard';
import ContactForm from './ContactForm/ContactForm';
import { Element } from 'react-scroll';

const ContactMe = () => {
  return (
    <Element name='contact'>
    <section className='contact-container'>
        <h5>Contact Me</h5>
        <div className='contact-content'>
            <div style={{flex:1}}>
            <ContactInfoCard
            iconUrl="./img/mail.png"
            text = "Sonali.sandeep19@gmail.com"
            />
            <ContactInfoCard
            iconUrl="./img/github.png"
            text = "https://github.com/19Sonali"
            />
            </div>
            <div style={{flex:1}}></div>
                <ContactForm/>
        </div>
    </section>

    </Element>
  )
}

export default ContactMe