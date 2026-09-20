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
