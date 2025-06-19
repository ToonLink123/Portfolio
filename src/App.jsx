// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollIntoView from "./ScrollIntoView";
import Home     from "./pages/Home";
import About    from "./pages/About";
import Projects from "./pages/Projects";
import Skills   from "./pages/Skills";
import Resume   from "./pages/Resume";
import Contact  from "./pages/Contact";
// import Navbar   from "./components/Navbar";   // ← add back when needed

export default function App() {
  return (
    <BrowserRouter basename="/Portfolio">
      <ScrollIntoView />
      {/* <Navbar /> */}                         {/* ← add back when needed */}
      <Routes>
        <Route path="/"          element={<Home />} />
        <Route path="/about"     element={<About />} />
        <Route path="/projects"  element={<Projects />} />
        <Route path="/skills"    element={<Skills />} />
        <Route path="/resume"    element={<Resume />} />
        <Route path="/contact"   element={<Contact />} />
        {/* fallback to home */}
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
