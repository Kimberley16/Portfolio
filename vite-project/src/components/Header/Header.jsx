import React from "react";
import "./Header.css";
import CTA from "./CTA";
import ME from "../../assets/pourCV.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Kimberley Paladini</h1>
        <h5 className="text-light">Front end/Salesforce trainee</h5>
        <CTA />
        <section className="pic">
          <HeaderSocials />

          <div className="me">
            <img src={ME} alt="" />
          </div>

          <a href="#contact" className="scroll_down">
            Scroll Down
          </a>
        </section>
      </div>
    </header>
  );
};

export default Header;
