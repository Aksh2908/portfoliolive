import { useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Context from './components/Context.jsx';
import Work from './components/Work.jsx';
import Tools from './components/Tools.jsx';
import Milestones from './components/Milestones.jsx';
import About from './components/About.jsx';
import Experience from './components/Experience.jsx';
import Education from './components/Education.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import CommandPalette from './components/CommandPalette.jsx';

function App() {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
      observer.observe(section);
    });

    // Observe child elements for staggered animations
    const childElements = document.querySelectorAll('.project, .milestone, .experience-item, .education-item, .skill-category-horizontal');
    childElements.forEach(element => {
      observer.observe(element);
    });

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
      childElements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="app">
      <CommandPalette />
      <Navbar />
      <main>
        <Hero />
        <Context />
        <Work />
        <Tools />
        <Milestones />
        <About />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
