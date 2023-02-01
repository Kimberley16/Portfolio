import React from "react";
import "./Header.css";
import CTA from "./CTA";
import ME from "../../assets/pourCV.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div classname="container header__container">
        <h5>Hello I'm</h5>
        <h1>Kimberley Paladini</h1>
        <h5 className="text-light">Front end/Salesforce trainee</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="" />
        </div>

        <a href="#contact" classname="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
