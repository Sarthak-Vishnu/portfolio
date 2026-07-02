import './styles/global.css';
import './styles/components.css';
import './styles/sections.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';

import { useCardTilt } from './hooks/useCardTilt';

import Hero         from './sections/Hero';
import About        from './sections/About';
import Education    from './sections/Education';
import Experience   from './sections/Experience';
import Projects     from './sections/Projects';
import Publications from './sections/Publications';
import Achievements from './sections/Achievements';
import Skills       from './sections/Skills';
import Contact      from './sections/Contact';

export default function App() {
  // 3D pointer tilt on the large content cards
  useCardTilt('.project-entry, .timeline-entry');

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Publications />
        <Achievements />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
