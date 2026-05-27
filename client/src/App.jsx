import Nav from './components/ui/Nav';
import Footer from './components/ui/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Achievements from './components/sections/Achievements';
import Certifications from './components/sections/Certifications';
import Leadership from './components/sections/Leadership';
import Skills from './components/sections/Skills';
import Education from './components/sections/Education';
import Contact from './components/sections/Contact';

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Achievements />
        <Certifications />
        <Leadership />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
