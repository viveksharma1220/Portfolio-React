import React from 'react'
import './intro.css';
import  bg from '../../assets/p__1_250.jpg'
import btnimg from '../../assets/hireme.png'
import {Link} from 'react-scroll';
import resume from '../../assets/resume.jpg'


const Intro = () => {
  const handleDownload=()=>{
    //create a link element
    const link=document.createElement('a');
    link.href={resume};
    link.download={resume};
    document.body.appendChild(link);
    // Trigger a click event on the link
    link.click();
    // Remove the link from the body
    document.body.removeChild(link);
  }
  return (
    <section id="intro">
      <div className='introContent'>
         <span className='hello'>Hello</span>
         <span className='introText'>I'm <span className='introName'>Vivek</span><br/>Web Developer</span>
         <p className='introPara'>I am a skilled web developer with experience in creating visually appealing and user friendly websites.</p>
         <Link><button className='btn'  onClick={() => window.open('https://drive.google.com/file/d/1VgifeNRs5T47NdjOqAY_gZsvTGxmUZQ6/view', '_blank')}>Check Resume</button></Link>
      </div>
      <img src={bg} width={500} height={500} alt="" className='bg'/>
    </section>
  )
}

export default Intro
