import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css';

const ContactForm = () => {
  const [message, setMessage] = useState('');
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zrp1ym3', 'template_5nayelu', form.current, 'UU68NvludAc3jkojn')
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        setMessage('Message Sent Successfully!'); 
        e.target.reset();  
      }, (error) => {
        console.error('Failed to send email:', error.text);
        setMessage('Failed to send message!');  
      });
  };

  return (
    <div className='contact-form-content'>
      <form ref={form} onSubmit={sendEmail}>
        <div className='name-container'>
          <input type='text' name='firstname' placeholder='First Name' required />
          <input type='text' name='lastname' placeholder='Last Name' required />
        </div>
        <input type='email' name='email' placeholder='Email' required />
        <textarea name="message" placeholder='Message' rows={3} required />
        <button type='submit'>SEND</button>
      </form>
      <p id="text">{message}</p> 
    </div>
  );
}

export default ContactForm;
