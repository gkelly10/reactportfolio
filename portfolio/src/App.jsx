import DarkModeToggle from './components/DarkModeToggle';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Socials from './components/Socials';
import './main.css';

const App = () => {
  return (
    <div className="bigContainer">
      <DarkModeToggle />
      <AboutMe />
      <Projects />
      <Socials />
    </div>
  );
};

export default App;
