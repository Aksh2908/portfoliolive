import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Context from './components/Context.jsx';
import Work from './components/Work.jsx';
import Metrics from './components/Metrics.jsx';
import Tools from './components/Tools.jsx';
import Milestones from './components/Milestones.jsx';
import About from './components/About.jsx';
import Experience from './components/Experience.jsx';
import Education from './components/Education.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Context />
        <Work />
        <Metrics />
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
