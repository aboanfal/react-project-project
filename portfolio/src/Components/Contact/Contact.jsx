import './Contact.css';
import React ,{useRef} from 'react'
import {MdOutlineEmail} from 'react-icons/md';
import { RiMessengerFill } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa"; 
import emailjs from '@emailjs/browser'
const ContactData =[
  {
  id:1,
  icon:<MdOutlineEmail/>,
  title:'Email',
  info:'yusif.2024@gmail.com',
  link:'yasir.yusif.2024@gmail.com',
  },
  {
  id:2,
  icon:<RiMessengerFill/>,
  title:'messenger',
  info:'Yassir Tech',
  link: 'yasir.linkedin',
  },
  {
  id:3,
  icon:<FaWhatsapp />,
  title:'Whatapp',
  info:'90645601',
  link:'https://api.whatsapp.com/send/?phone=4790645601&text&type=phone_90645601',
  },
  
  
]
function Contact() {
const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current,'YOUR_PUBLIC_KEY',
      )
      e.target.reset();
  };
  return (
    <section className="contact" id='contact'>
   <div className="top-section">
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>
   </div>

   <div className="container contact-container">
    <div className="contact-options">
      {ContactData.map(({id ,icon ,title , info , link})=>(
        <article key={id} className='contact-option'>
          {icon}
          <h4>{title}</h4>
          <h5>{info}</h5>
          <a href={link} target='_blank'>Send Message</a>
        </article>
      ))}
    </div>
    <form  ref={form} onSubmit={sendEmail}> 
      <input type="text" placeholder='Full Name' name='name'/>
      <input type="Email" placeholder='Your Email Please' name='email' />
      <textarea name='message' rows={10} id="" placeholder='Enter Your Message'></textarea>
      <button className='btn btn-primary'>Send Message</button>
    </form>
   </div>
    </section>
  )
}

export default Contact