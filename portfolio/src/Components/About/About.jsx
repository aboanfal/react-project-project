import { FaAward } from "react-icons/fa";
import { FiUserCheck } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import './About.css'
import I from '../../assets/yasir.jpg.jpg';
function About() {
  return (
    <section className='about' id='about'>
    <div className='top-section'>
      <h5>Get to know</h5>
      <h2>About Me</h2>
    </div>
    <div className="container about-container">
      <div className='about-me'>
        <div className='about-me-image'>
           <img src={I} alt="about me" />
        </div>
      </div>
      <div className="about-content">
        <div className="about-cards">
          <div className="about-card">
            <FaAward  className="about-icon"/>
            <h5>experience</h5>
            <small>3+ year working</small>
          </div>
            <div className="about-card">
             <FiUserCheck className="about-icon"/>
            <h5>Clients</h5>
            <small>200+ worldwide</small>
          </div>
            <div className="about-card">
            <VscFolderLibrary className="about-icon" />
            <h5>Projects</h5>
            <small>80+ completed</small>
          </div>
        </div>
        <p>English is essential in modern life as the primary global lingua franca,unlocking 
          international career opportunities, higher education, and widespread access to information, technology, and entertainment.It facilitates communication 
           for travel and business, connecting people across cultures and enhancing professional
            growth in fields like science, aviation, and diplomacy.</p>
            <a href="#contact" className="btn btn-primary">Let's Talk</a>
      </div>
    </div>
    </section>
  )
}

export default About