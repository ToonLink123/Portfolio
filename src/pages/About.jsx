// src/components/About.jsx

import React from 'react';
import profilePic from '../assets/eshan.png';

export default function About() {
  return (
    <section className="py-16 bg-white text-gray-800">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        
        {/* Photo */}
        <div className="flex justify-center mb-6">
          <img
            src={profilePic}
            alt="Eshan Agarwal"
            className="w-40 h-40 rounded-full object-cover shadow-lg"
          />
        </div>
        
        {/* Bio */}
        <p className="text-lg leading-relaxed mb-6">
          I'm Eshan Agarwal, a Computer Science major passionate about full-stack development, cybersecurity, and building meaningful digital experiences. 
          Currently interning at Triple Point Security, I'm gaining hands-on experience working on cloud-based CLI tools, systems architecture, and AWS provisioning.
        </p>
        <p className="text-lg leading-relaxed mb-8">
          Outside of code, I'm an Eagle Scout, tinkerer, and lifelong learner. Whether it's building tools, drawing line art, or diving into game development with Unreal Engine — I love creating.
        </p>
        
        {/* Social Links */}
        <div className="flex justify-center space-x-4">
          {/* LinkedIn Link */}
          <a
            href="https://www.linkedin.com/in/eshan-agarwal/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-5 py-3 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition"
            aria-label="LinkedIn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 mr-2"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            LinkedIn
          </a>
          
          {/* GitHub Link */}
          <a
            href="https://github.com/ToonLink123"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-5 py-3 bg-gray-800 text-white rounded-full shadow hover:bg-gray-700 transition"
            aria-label="GitHub"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 mr-2"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}