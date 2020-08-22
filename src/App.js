import React from 'react';

// Component imports
import Header from './components/Header';
import SideLinks from './components/SideLinks';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Nav from './components/Nav';

function App() {
  return (
    <div className='app'>
      <Nav />
      <div className='app-container'>
        <Header />
        <About />
        <Projects />
        <Contact />
      </div>
      <SideLinks />
    </div>
  );
}

export default App;
