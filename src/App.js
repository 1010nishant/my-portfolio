import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner.js';
import { Skills } from './components/Skills.js';
import { Projects } from './components/Projects.js';
import { Contact } from './components/Contact.js';
import { Footer } from './components/Footer.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DevHac } from './components/DevHac';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Skills/>
      <Projects/>
      <DevHac/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
