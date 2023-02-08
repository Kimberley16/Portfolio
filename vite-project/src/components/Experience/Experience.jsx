import React from "react";
import "./Experience.css";
import { FaReact } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What are my skills?</h5>
      <h2>My experience and journey</h2>

      <div className="container experience__container">
        <div className="hardskills"></div>
        <FaReact /> <h5>React</h5>
        <FaCss3Alt /> <h5>CSS3</h5>
        <FaHtml5 /> <h5>HTML5</h5>
        <div className="softskills"></div>
      </div>

      <div className="Myjourney"></div>
    </section>
  );
};

export default Experience;
