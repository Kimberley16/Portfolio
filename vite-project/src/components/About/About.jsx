import React from "react";
import "./About.css";
import ME from "../../assets/jack.jpg";
import { FaAward } from "react-icons/fa";
import { GiOpenFolder } from "react-icons/gi";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <a href="#experience">
              <article className="about__card">
                <FaAward className="about__icon" />
                <h5>Experience</h5>
                <small>BeCode training</small>
              </article>
            </a>

            <a href="#portfolio">
              <article className="about__card">
                <GiOpenFolder className="about__icon" />
                <h5>Project</h5>
                <small>My training projects</small>
              </article>
            </a>
          </div>
          <p>
            hi! I'm Kimberley Paladini and I tend to be a web Dev! Lorem, ipsum
            dolor sit amet consectetur adipisicing elit. Sint quibusdam illum
            voluptas, ullam asperiores accusantium earum doloremque quas, in
            tempore unde ipsum aliquid magni eius sed, ipsa quo neque illo.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
