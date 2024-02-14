import React from 'react'
import TwitterIcon from '../../assets/twitter.png'
import '../Contact/contact.css'
import  emailjs from '@emailjs/browser';
import { useRef } from 'react';


const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zqi75sb','template_x3pncrq',form.current,'9zhkrvON5WrxbRtxRi-D8')
    .then((result)=>{
      console.log(result.text);
      e.target.reset();
      alert('Email sent');
    },(error)=>
    {console.log(error.text);
    });
};

  return (
    <section id='contactPage'>
        <div className='contact'>
           <h1 className='contactPageTitle'>
              Contact Me
           </h1>
           <span className='ContactDescription'>Please fill out the form for work opportunities</span>

           <form className='ContactForm' ref={form} onSubmit={sendEmail}>
              <input type='text' className='name' placeholder='Your Name' name='your_name' />
              <input type='email' className='email' placeholder='Your Email' name='your_email'/>
              <textarea className='msg' name='message' rows='5' placeholder='Your Message' ></textarea>
              <button className='btn' type='Submit' value='Send'>Submit</button>
              <div className='links'>
                <img src={TwitterIcon} alt='TwitterIcon' className='link' />
                <img src={TwitterIcon} alt='GithubIcon' className='link' />
                <img src={TwitterIcon} alt='LinkedinIcon' className='link' />
                <img src={TwitterIcon} alt='ReplitIcon' className='link' />
              </div>
           </form>


        </div>
    </section>
  )
}

export default Contact
