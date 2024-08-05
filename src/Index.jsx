// src/components/Index.js
import React from 'react';
import Navbar from './Navbar';
import './Index.css';
import Skills from './Skills';

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <About />
      <Skills />
      {/* Other components */}
    </div>
  );
}



export default Index;
