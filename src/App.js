import './App.css';
import Home from './components/home';
import Header from './components/header';
import About from './components/about';
import Social from './components/social';
import Project from './components/project';
import Resume from './components/resume';

function App() {
  return (
    <div className="App" style={{cursor:"🚀"}}>
      <header className="App-header">
        <Header/>
        <Home/>
        <About/>
        <Project/>
        <Resume/>
        <Social/>
      </header>
    </div>
  );
}

export default App;
