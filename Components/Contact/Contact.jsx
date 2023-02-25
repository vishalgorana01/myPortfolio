import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import swal from 'sweetalert';

import './Contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { FaInstagramSquare } from 'react-icons/fa'
import { ImWhatsapp } from 'react-icons/im'

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rck7foi', 'template_xckhdhk', form.current, 'mvC5IuYsqMVRsmS1q')
      .then((result) => {
        console.log(result.text);
        swal("Success!", "Your message is successfully sended!", "success");
      }, (error) => {
        console.log(error.text);
        swal("Error!", error.text, "error");
      });
  };


  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className='contact_option-icon' />
            <h4>Email</h4>
            <h5>vishalgorana514@gmail.com</h5>
            <a href="mailto:vishalgorana514@gmail.com">Send a message</a>
          </article>

          <article className="contact_option">
            <FaInstagramSquare className='contact_option-icon' />
            <h4>Instagram</h4>
            <h5>vishal_gorana_04</h5>
            <a href="https://www.instagram.com/vishal_gorana_04/">Send a message</a>
          </article>

          <article className="contact_option">
            <ImWhatsapp className='contact_option-icon' />
            <h4>WhatsApp</h4>
            <h5>9479853285</h5>
            <a href="https://api.whatsapp.com/send?phone=+919479853285">Send a message</a>
          </article>

        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send</button>
        </form>
      </div>
    </section>
  )
}

export default Contact