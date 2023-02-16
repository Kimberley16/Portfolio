import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/escape.png";
import IMG2 from "../../assets/manager.png";
import IMG3 from "../../assets/todo.png";
import IMG4 from "../../assets/weather.png";
import IMG5 from "../../assets/hiking.png";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Be Code Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portoflio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Escape game site</h3>
          <p>
            This is a team-project. The languages used are : HTML5 and CSS3.
          </p>
          <br />
          <a
            href="https://becodeorg.github.io/hamilton-7-escapium-team-6/"
            className="btn btn-primary"
            target="_blank"
          >
            Live demo
          </a>
        </article>
        <article className="portoflio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>Character Manager</h3>
          <p>
            This is a team-project. The languages used are: HTML5, Sass, JS{" "}
          </p>
          <br />
          <a
            href="https://graceful-maamoul-64162a.netlify.app/"
            className="btn btn-primary"
            target="_blank"
          >
            Live demo
          </a>
        </article>

        <article className="portoflio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>react app</h3>
          <p>
            This is a solo project. The languages used are : React, JS and Sass.
          </p>
          <br />
          <a
            href="https://becodeorg.github.io/hamilton-7-to-do-react-Kimberley16/"
            className="btn btn-primary"
            target="_blank"
          >
            Live demo
          </a>
        </article>

        <article className="portoflio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>Weather app</h3>
          <p>
            This is a solo project. The languages used are : React, JS and Sass.
          </p>
          <br />
          <a
            href="https://precious-kashata-d24901.netlify.app/"
            className="btn btn-primary"
            target="_blank"
          >
            Live demo
          </a>
        </article>

        <article className="portoflio__item">
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>Hiking project</h3>
          <p>
            This is a team-project. The languages used are : Php, JS and Sass.
          </p>
          <br />
          <a
            href="https://descending-multisys.000webhostapp.com/"
            className="btn btn-primary"
            target="_blank"
          >
            Live demo
          </a>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
