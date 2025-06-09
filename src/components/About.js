import React from "react";
import profile from "../assets/images/profile.png";
import "../assets/styles/about.css";

export default function About() {
  return (
    <div className="main-about-container">
      <div className="about-container">
        <div className="about">
          <h2>About Me</h2>
          <p>
            Hello! I'm Brianna, a software engineer with over 5 years of
            experience. I enjoy building exceptional websites and apps that
            provide intuitive, responsive, pixel-perfect user interfaces with
            efficient and modern backends.
          </p>
          <p>
            I'm currently working at Nerdery where I get to implement a wide
            range of features and collaborate across domains daily.
          </p>
          <p>Here are a few technologies I've been working with recently:</p>
          <div className="tech-lists">
            <ul>
              <li>TypeScript</li>
              <li>Next.js</li>
              <li>React Hook Form</li>
            </ul>
            <ul>
              <li>Vitest/Jest & React Testing Library</li>
              <li>Redux Toolkit</li>
              <li>Python & Django</li>
            </ul>
          </div>
        </div>
        <div className="profile-picture">
          <img src={profile} alt="Brianna Workman" />
        </div>
      </div>
    </div>
  );
}
