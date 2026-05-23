import React from 'react';
import me from '../../assets/yasssir.jpg.jpg';
import CV from '../../assets/cv-template.pdf.pdf'
import './Home.css';
import HomeSocial from './HomeSocial';
function Home() {
  return (
    <div className='home'>
      <div className='container home-container'>
        <h4> Hello I'm</h4>
        <h1>Yassir Yousif</h1>
        <h4 className='text-light'>Front-End Developer</h4>
        <div className='btns'>
          <a href={CV} className='btn' download>Download CV</a>
          <a href="#" className='btn btn-primary'>Let's Talk</a>
        </div>
        <div className='me'>
          <img src={me} alt="logo" />
        </div>
        <a href="#about" className='scroll_down'>Scroll Down</a>
        <HomeSocial/>
      </div>
    </div>
  )
}

export default Home