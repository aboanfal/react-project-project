import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import './Footer.css'
export default function Footer() {
  return (
<footer>
  <a href="#" className='footer-logo'>YassirTech</a>
  <ul className="permalinks">
   <li><a href="#">Home</a></li>
   <li><a href="#about">About</a></li>
   <li><a href="#skills">Skills</a></li>
   <li><a href="#services">Services</a></li>
   <li><a href="#projects">projects</a></li>
   <li><a href="#contact">Contact</a></li> 
  </ul>
  <div className='footer-social'>
    <a href="#" target='_blank'><FaFacebook /></a>
    <a href="#" target='_blank'><FaInstagramSquare /></a>
    <a href="#" target='_blank'><FaXTwitter />
</a>
  </div>
  <div className='footer-copyright'>
    <small>&copy; <a href="#">YassirTech</a> All right reserved</small>
  </div>
</footer>  )
}
