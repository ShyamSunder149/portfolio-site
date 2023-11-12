import './App.css';
import Home from './components/home';
import Header from './components/header';
import About from './components/about';
import Social from './components/social';
import Skills from './components/skills';
import Academic from './components/academic';
import Experience from './components/experience';
import Project from './components/project';
import Resume from './components/resume';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <Home/>
        <About/>
        {/* <Skills/> */}
        <Experience/>
        <Academic/>
        <Project/>
        <Resume/>
        <Social/>
      </header>
    </div>
  );
}

export default App;
