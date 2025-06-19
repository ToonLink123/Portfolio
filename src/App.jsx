// src/App.jsx
import "./App.css";
import "./index.css";

import { Routes, Route } from "react-router-dom";
import Navbar   from "./components/Navbar";
import Home     from "./pages/Home";
import About    from "./pages/About";
import Projects from "./pages/Projects";
import Contact  from "./pages/Contact";
import Resume   from "./pages/Resume";
import Skills   from "./pages/Skills";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/"         element={<Home />} />
          <Route path="/about"    element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact"  element={<Contact />} />
          <Route path="/resume"   element={<Resume />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </main>
    </>
  );
}
