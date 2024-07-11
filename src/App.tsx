import './App.css'
import Connect from "./components/Connect";
import StatusBar from "./components/StatusBar";
import Home from "./components/Home";
import { Navigation } from "./components/Navigation";

function App() {
  return (
    <div className="relative min-h-screen w-full bg-[url('./data/anime.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black opacity-75"></div>
      <div className="relative mx-32 p-8 flex flex-col gap-5 min-h-screen text-neutral-200 z-10">
        <StatusBar />
        <Home />
        <Navigation />
        <Connect />
      </div>
    </div>
  );
}

export default App;
