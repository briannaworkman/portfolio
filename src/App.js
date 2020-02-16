import React from "react";
import Header from "./components/Header";
import SideLinks from "./components/SideLinks";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="app">
      <Nav />
      <Header />
      <SideLinks />
    </div>
  );
}

export default App;
