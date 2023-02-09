import React from "react";
import "./Experience.css";
import { FaReact } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { SiPhp } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";

const Experience = () => {
  return (
    <section id="experience">
      <h5>My experience</h5>
      <h2>What are my skills?</h2>

      <div className="experience__container">
        <div className="hardskills">
          <FaReact /> <h5>React</h5>
          <FaCss3Alt /> <h5>CSS3</h5>
          <FaHtml5 /> <h5>HTML5</h5>
          <FaSass /> <h5>Sass</h5>
          <IoLogoJavascript /> <h5> Javascript</h5>
          <SiPhp /> <h5>PHP</h5>
        </div>

        <div className="softskills">
          <h5>Ui oriented</h5>
        </div>
        <div className="Myexperience">
          <h5>gnom gnom</h5>
        </div>
      </div>

      <div className="Myjourney"></div>
    </section>
  );
};

export default Experience;
