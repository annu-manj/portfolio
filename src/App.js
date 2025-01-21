// src/App.js
import React from 'react';

import Sidebar from './components/Sidebar';
import About from './components/About';
//import Skills from './components/Skills';
//import Experience from './components/Experience';
//import Projects from './components/Project';
//import Education from './components/Education';
// <Skills /> <Education/> <Experience /><Projects />
import './App.css';



function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="content">
        
          <About />
        
          
        
      </div>
    </div>
    
  );
}

export default App;
