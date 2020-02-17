import React from "react";
import "../assets/styles/nav.css";

function Nav() {
  return (
    <div className="nav">
      <div className="container">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#aricles">Articles</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
}

export default Nav;
