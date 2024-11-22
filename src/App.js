import './App.css';
import ParticlesComponent from './components/particles';
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Project";
import Messages from './components/Messages';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <ParticlesComponent id="particles" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/messages" element={<Messages />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
