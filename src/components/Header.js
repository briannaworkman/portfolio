import React from "react";
import "../assets/styles/header.css";

function App() {
  return (
    <div className="header">
      <p className="header-p">Hi, my name is</p>
      <h1 className="header-h1">Brianna Workman.</h1>
      <h2 className="header-h2">I am a Software Engineer</h2>
      <div className="button-container">
        <a href="mailto:brianna.workman@hotmail.com">
          <button className="button">Get In Touch</button>
        </a>
        <a href="https://github.com/briworkman" target="_blank">
          <button className="button">GitHub</button>
        </a>
        <a href="https://resume.creddle.io/resume/ba5qjpkswa6" target="_blank">
          <button className="button">Resume</button>
        </a>
      </div>
    </div>
  );
}

export default App;
