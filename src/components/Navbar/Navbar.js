import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png'
import contactImg from '../../assets/contact.png'
import {Link} from 'react-scroll';
import menu from '../../assets/menu.png'


const Navbar = () => {
  const [showMenu,setShowMenu]=useState(false);

  return (
  <nav className='navbar'>
    <img src={logo} width={200} alt="logo" />
    <div className='desktopMenu'>
      <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Home</Link>
      <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>About</Link>
      <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Portfolio</Link>
      <Link activeClass='active' to='' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Education</Link>
      <Link activeClass='active' to='contactPage' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Contact</Link>
    </div>
    <button className='desktopMenuButton'onClick={()=>{
      document.getElementById('contactPage').scrollIntoView({behaviour:'smooth'});
    }}>
        <img src={contactImg} alt="" className='desktopMenuImg'/>Contact Me
    </button>
    <img src={menu} alt="Menu" className='mobMenu'onClick={()=>{setShowMenu(!showMenu)}} />
    <div className='navMenu' style={{display: showMenu?'flex':'none'}}>
      <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-50} duration={500} className='ListItem'onClick={()=>{setShowMenu(false)}}>Home</Link>
      <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='ListItem'onClick={()=>{setShowMenu(false)}}>About</Link>
      <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='ListItem'onClick={()=>{setShowMenu(false)}}>Portfolio</Link>
      <Link activeClass='active' to='' spy={true} smooth={true} offset={-50} duration={500} className='ListItem'onClick={()=>{setShowMenu(false)}}>Education</Link>
      <Link activeClass='active' to='contactPage' spy={true} smooth={true} offset={-50} duration={500} className='ListItem'onClick={()=>{setShowMenu(false)}}>Contact</Link>
      <Link activeClass='active' to='con' spy={true} smooth={true} offset={-50} duration={500} className='ListItem'onClick={()=>{setShowMenu(false)}}>Contact</Link>
    </div>
  </nav>
  )
}

export default Navbar
