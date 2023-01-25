import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="Nav_container">
        <div className="logo">
          <h3>A</h3>
        </div>
        <ul className="nav_links">
          {navLinks.map((navLink, index) => {
            return (
              <li key={index}>
                <a href={"${navLink}"}>{navLink}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
