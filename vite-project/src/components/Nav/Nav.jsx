import React from "react";
import "./Nav.css";
import { AiTwotoneHome } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { RiServiceFill } from "react-icons/ri";
import { AiFillMessage } from "react-icons/ai";

const Nav = () => {
  return (
    <nav>
      <a href="#" className="active">
        <AiTwotoneHome />
      </a>
      <a href="#about">
        <FaUserCircle />
      </a>
      <a href="#experience">
        <FaBook />
      </a>
      <a href="#services">
        <RiServiceFill />
      </a>
      <a href="#contact">
        <AiFillMessage />
      </a>
    </nav>
  );
};

export default Nav;
