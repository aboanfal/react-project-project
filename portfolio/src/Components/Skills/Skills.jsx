import './Skills.css'
import CSS from '../../assets/CSS3_logo.svg.png';
import express from '../../assets/expres.jpg';
import javascript from '../../assets/js.jpg';
import next from '../../assets/next.jpg';
import node from '../../assets/node.jpg';
import php from '../../assets/php.jpg';
import react from '../../assets/react.jpg';
import tailwind from '../../assets/tailwind.jpg';

const skillsDtat =[
  {
    id:1,
    image:CSS,
    title:'CSS',
    desc:'User Interface',
  },
   {
    id:2,
    image:javascript,
    title:'Javascript',
    desc:'Interaction',
  },
   {
    id:3,
    image:react,
    title:'React',
    desc:'Framework',
  },
   {
    id:4,
    image:tailwind,
    title:'Tailwind',
    desc:'User Interface',
  },
   {
    id:5,
    image:node,
    title:'Node Js',
    desc:'Web server',
  },
   {
    id:6,
    image:next,
    title:'Next Js',
    desc:'React Framework',
  },
   {
    id:7,
    image:php,
    title:'PHP',
    desc:'Database',
  },
   {
    id:8,
    image:express,
    title:'Express js',
    desc:'Node js framework',
  },
]
function Skills() {
  return (
    <section className='skills' id='skills'>
      <div className="top-section">
        <h5>what skills I have</h5>
        <h2>my experience</h2>
      </div>
      <div className="container container-skills">
        {skillsDtat.map(({id , image , title , desc})=>(
             <article className='card-skills'>
          <div className="icon" key={id}>
            <img src={image} alt="" />
          </div>
          <div className='content'>
            <h4>{title}</h4>
            <p className='text-light'>{desc}</p>
          </div>
        </article>
        ))}
       
        
      </div>
    </section>
  )
}

export default Skills