import React from "react";
import Header from "./components/Header";
import SideLinks from "./components/SideLinks";
import Nav from "./components/Nav";
import About from "./components/About";

function App() {
  return (
    <div className="app">
      <Nav />
      <Header />
      <About />
      <SideLinks />
    </div>
  );
}

export default App;
