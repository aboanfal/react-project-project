import './Project.css';
import  IMG1 from '../../assets/prot.jpg';
import IMG2 from '../../assets/port1.jpg'
import IMG3 from '../../assets/port2.jpg'
import IMG4 from '../../assets/port3.jpg'
import IMG5 from '../../assets/port4.jpg'
import IMG6 from '../../assets/port5.jpg'

 const portfolioData =[
  { 
    id:1,
    image:IMG1,
    title:'portfolio item 1',
    github:'https://github.com/aboanfal/HTML-CSS-Template',
    demo:'https://demo 1',
  },
  { 
    id:2,
    image:IMG2,
    title:'portfolio item 2',
    github:'https://github.com/aboanfal/HTML-CSS-Template',
    demo:'https://demo 2',
  },
  { 
    id:3,
    image:IMG3,
    title:'portfolio item 3',
    github:'https://github.com/aboanfal/HTML-CSS-Template',
    demo:'https://demo 3',
  },
  { 
    id:4,
    image:IMG4,
    title:'portfolio item 4',
    github:'https://github.com/aboanfal/HTML-CSS-Template',
    demo:'https://demo 4',
  },
  { 
    id:5,
    image:IMG5,
    title:'portfolio item 5',
    github:'https://github.com/aboanfal/HTML-CSS-Template',
    demo:'https://demo 5',
  },
  { 
    id:6,
    image:IMG6,
    title:'portfolio item 6',
    github:'https://github.com/aboanfal/HTML-CSS-Template',
    demo:'https://demo 6',
  },

 ]
function Project() {
  return (
    <section className='projects' id='projects'>
      <div className="top-section">
        <h5>my recent work</h5>
        <h2>portfolio</h2>
      </div>

      <div className="container projects-container">
       {portfolioData.map(({id , image , title , github , demo})=>(
        <article  key={id} className='portfolio-item'>
          <div className="portfolio-item-img">
           <img src={image} alt="" />
          </div>

          <h3>{title}</h3>
          <div className='portfolio-item-btns'>
            <a href={github} target='_blank' className='btn'>github</a>
            <a href={demo}  target='_blank' className=' btn btn-primary'>demo </a>
          </div>
        </article>
       ))}
      </div>
    </section>
  )
}

export default Project;