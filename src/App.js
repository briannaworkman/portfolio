import React from 'react';
import Header from './components/Header';
import SideLinks from './components/SideLinks';
import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  return (
    <div className='app'>
      <Nav />
      <div className='app-container'>
        <Header />
        <About />
        <Projects />
      </div>
      <SideLinks />
    </div>
  );
}

export default App;
