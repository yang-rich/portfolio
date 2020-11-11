import React from "react";
import "../styles/nav.css";

const Nav = () => {
  return (
    <>
      <div className="navContainer">
        <div className="linkButtons">
          <a href="#aboutMe">ABOUT</a>
        </div>
        <div className="linkButtons">
          <a href="#projectHead">PROJECTS</a>
        </div>
        <div className="linkButtons">
          <a href="#contacts">CONTACT</a>
        </div>
      </div>
    </>
  );
};

export default Nav;
