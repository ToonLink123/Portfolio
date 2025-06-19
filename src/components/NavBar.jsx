// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ padding: '1rem', background: '#eee' }}>
      <Link to="/"         style={{ marginRight: 16 }}>Home</Link>
      <Link to="/about"    style={{ marginRight: 16 }}>About</Link>
      <Link to="/projects" style={{ marginRight: 16 }}>Projects</Link>
      <Link to="/skills" style={{ marginRight: 16 }}>Skills</Link>
      <Link to="/resume"   style={{ marginRight: 16 }}>Resume</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}
