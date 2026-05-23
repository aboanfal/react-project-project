
import Home from  "./Components/Home/Home.jsx";
import About from  "./Components/About/About.jsx";
import Skills from  "./Components/Skills/Skills.jsx";
import Services from "./Components/Services/Services.jsx";
import Project from  "./Components/Project/Project.jsx"
import Contact from  "./Components/Contact/Contact.jsx";
import Footer from  "./Components/Footer/Footer.jsx";
import Nav from "./Components/Nav/Nav.jsx";

function App() {
  return (
    <div>
     <Home/>
     <About/>
     <Nav/>
     <Skills/>
     <Services/>
     <Project/>
     <Contact/>
     <Footer/>
    </div>
  )
}

export default App