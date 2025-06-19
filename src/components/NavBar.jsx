// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const linkStyle = { marginRight: 16 };

  // helper to avoid repeating the object syntax
  const hashLink = (hash, label) => (
    <Link
      key={hash}
      to={{ pathname: '/', hash }}   // → "/#section"
      style={linkStyle}
    >
      {label}
    </Link>
  );

  return (
    <nav style={{ padding: '1rem', background: '#eee' }}>
      {hashLink('#home',     'Home')}
      {hashLink('#about',    'About')}
      {hashLink('#projects', 'Projects')}
      {hashLink('#skills',   'Skills')}
      {hashLink('#resume',   'Resume')}
      {hashLink('#contact',  'Contact')}
    </nav>
  );
}
