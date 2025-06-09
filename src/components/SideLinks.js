import React from "react";
import "../assets/styles/side-links.css";
import github from "../assets/icons/github-brands.svg";
import linkedin from "../assets/icons/linkedin-brands.svg";
import medium from "../assets/icons/medium-brands.svg";

function SideLinks() {
  return (
    <div className="side-links">
      <ul>
        <li>
          <a
            href="https://github.com/briannaworkman"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="Brianna Workman's GitHub" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/bri-workman/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="Brianna Workman's LinkedIn" />
          </a>
        </li>
        <li>
          <a
            href="https://medium.com/@briworkman9"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={medium} alt="Brianna Workman's Medium Profile" />
          </a>
        </li>
      </ul>
      <div className="after"></div>
    </div>
  );
}

export default SideLinks;
