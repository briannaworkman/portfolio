import React from "react";
import "../assets/styles/header.css";

function Header() {
  return (
    <div className="header">
      <p className="header-p">Hi, my name is</p>
      <h1 className="header-h1">Brianna Workman.</h1>
      <h2 className="header-h2">I am a Software Engineer.</h2>
      <p className="summary">
        I have a passion for building exceptional, high-quality websites and
        applicaitons for the web, iOS, and Android.
      </p>
      <div className="button-container">
        <a href="mailto:brianna.workman@hotmail.com">
          <button className="button">Get In Touch</button>
        </a>
        <a href="https://resume.creddle.io/resume/ba5qjpkswa6" target="_blank">
          <button className="button">Resume</button>
        </a>
      </div>
    </div>
  );
}

export default Header;
