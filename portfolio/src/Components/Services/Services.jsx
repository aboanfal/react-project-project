import React from 'react'
import { MdDesignServices } from "react-icons/md";
import { IoIosRocket } from "react-icons/io";
import { FaCode } from "react-icons/fa";
import './Services.css'
function Services() {
  return (
    <section className='services' id='services'>
      <div className="top-section">
    <h5>What I offer</h5>
    <h2>Services</h2>
   </div>
   <div className="container container-services">
    <article className='card'>
      <MdDesignServices className='icon' />
        <h3>Web design</h3>
        <p className='text-light'>I am a full stack developer build applications with htmal , Css ,javascript
          ,react js tailwind and next.js.
        </p>
    </article>

    <article className='card'>
       <IoIosRocket  className='icon'/>      
        <h3>Web design</h3>
        <p className='text-light'>I am a full stack developer build applications with htmal , Css ,javascript
          ,react js tailwind and next.js.
        </p>
    </article>

    <article className='card'>
        <FaCode className='icon'/>
        <h3>Fast Performance</h3>
        <p className='text-light'>I am a full stack developer build applications with htmal , Css ,javascript
          ,react js tailwind and next.js.
        </p>
    </article>
   </div>
    </section>
  )
}

export default Services