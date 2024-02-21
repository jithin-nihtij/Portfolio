import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./Components/App.css";
import PortNav from "./Components/PortNav";
import About from "./Components/About";
import Home from "./Components/Home";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <PortNav />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/skills" element={<Skills/>}/>
          <Route path="/projects" element={<Projects/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
