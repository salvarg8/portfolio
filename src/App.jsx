import Navbar from "./components/Navbar/Navbar"
import Hero from "./pages/Hero"
import Experience from "./pages/Experience"
import Projects from "./pages/Projects"
import Curriculum from "./pages/Curriculum"
import Contact from "./pages/Contact"


function App() {
  return (
    <div>
      <Navbar />  
      <Hero />
      <Experience />
      <Projects />
      <Curriculum />
      <Contact /> 
    </div>     
  );
}

export default App