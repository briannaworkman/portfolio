import React from "react";
import profile from "../assets/profile.jpg";
import "../assets/styles/about.css";

export default function About() {
  return (
    <div className="picture">
      <img src={profile} />
    </div>
  );
}
