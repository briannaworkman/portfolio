import React from "react";
import Header from "./components/Header";
import SideLinks from "./components/SideLinks";
import Nav from "./components/Nav";
import About from "./components/About";

function App() {
  return (
    <div className="app">
      <SideLinks />
      <Nav />
      <Header />
      <About />
    </div>
  );
}

export default App;
