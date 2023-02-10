import React from "react";
import "./Experience.css";
import { FaReact } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { SiPhp } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { RiCustomerService2Line } from "react-icons/ri";
import { MdReportProblem } from "react-icons/md";
import { RiTeamLine } from "react-icons/ri";
import { VscFeedback } from "react-icons/vsc";
import { GiTalk } from "react-icons/gi";

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
          <RiCustomerService2Line /> <h5>Ui oriented</h5>
          <MdReportProblem />
          <h5>Probem-solving</h5>
          <RiTeamLine />
          <h5>Team working</h5>
          <VscFeedback />
          <h5>open to criticism</h5>
          <GiTalk />
          <h5>Communication</h5>
        </div>
        <div className="Myexperience">
          <p>
            When I was a student, I worked a lot to pay my stuffs, so I have a
            lot of experience with clients! I worked in a supermarket in caterer
            department, so please the clients is one of my specialities!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
