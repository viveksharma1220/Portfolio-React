import React from 'react'
import TwitterIcon from '../../assets/twitter.png'
import '../Contact/contact.css'


const Contact = () => {
  return (
    <section id='contactPage'>
        <div className='contact'>
           <h1 className='contactPageTitle'>
              Contact Me
           </h1>
           <span className='ContactDescription'>Please fill out the form for work opportunities</span>
           <form className='ContactForm'>
              <input type='text' className='name' placeholder='Your Name'/>
              <input type='email' className='email' placeholder='Your Email'/>
              <textarea className='msg' name='message' rows='5' placeholder='Your Message'></textarea>
              <button className='btn' type='submit' value='Send'>Submit</button>
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
