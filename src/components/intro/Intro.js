import React from 'react'
import './intro.css';
import  bg from '../../assets/p__1_250.jpg'
import btnimg from '../../assets/hireme.png'
import {Link} from 'react-scroll';

const Intro = () => {
  return (
    <section id="intro">
      <div className='introContent'>
         <span className='hello'>Hello</span>
         <span className='introText'>I'm <span className='introName'>Vivek</span><br/>Web Developer</span>
         <p className='introPara'>I am a skilled web developer with experience in creating visually appealing and user friendly websites.</p>
         <Link><button className='btn'>Check Resume</button></Link>
      </div>
      <img src={bg} width={500} height={500} alt="" className='bg'/>
    </section>
  )
}

export default Intro
