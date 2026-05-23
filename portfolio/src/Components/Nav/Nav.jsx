import React, { useState } from 'react';
import './Nav.css'
import { IoHome } from "react-icons/io5";
import { LuUserRoundCog } from "react-icons/lu";
import { BiBookAdd } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareAdd } from "react-icons/bi";
 
export default function Nav() {
  const [activeNav ,setActiveNav] = useState ('#')
  return (
    <nav>
      <a href="#" className={activeNav === '#' ? 'active' :''} onClick={()=>setActiveNav('#')}><IoHome /></a>
      <a href="#about" className={activeNav === '#about' ? 'active' :''} onClick={()=>setActiveNav('#about')}><LuUserRoundCog /></a>
      <a href="#services" className={activeNav === '#services' ? 'active' :''} onClick={()=>setActiveNav('#services')}><BiBookAdd /></a>
      <a href="#projects" className={activeNav === '#projects' ? 'active' :''} onClick={()=>setActiveNav('#projects')}><RiServiceLine /></a>
      <a href="#contact" className={activeNav === '#contact' ? 'active' :''} onClick={()=>setActiveNav('#contact')}><BiMessageSquareAdd /></a>
    </nav>
  )
}
