import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css'

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_zrp1ym3', 'template_5nayelu', form.current, {
        publicKey: 'UU68NvludAc3jkojn',
      })
      e.target.reset()
  };
  return (
    <div className='contact-form-content'>
        <form ref={form} onSubmit={sendEmail}>
            <div className='name-container'>
                <input type='text' name='firstname' placeholder='First Name'/>
                <input type='text' name='lastname' placeholder='Last Name'/>

            </div>
            <input type='text' name='email' placeholder='Email'/>
            <textarea type="text" name="message" placeholder='Message' rows={3}/>
            <button>SEND</button>
        </form>
    </div>
  )
}

export default ContactForm