import About from './components/About';
import Navbar from './components/Navbar';
import Hero from './components/Hero'; // Assuming you have a Hero component
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Education />
      <Contact />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
