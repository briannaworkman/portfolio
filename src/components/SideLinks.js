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
          <a href="https://github.com/briworkman" target="_blank">
            <img src={github} />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/brianna-workman-b38326193/"
            target="_blank"
          >
            <img src={linkedin} />
          </a>
        </li>
        <li>
          <a href="https://medium.com/@briworkman9" target="_blank">
            <img src={medium} />
          </a>
        </li>
      </ul>
      <div className="after"></div>
    </div>
  );
}

export default SideLinks;
