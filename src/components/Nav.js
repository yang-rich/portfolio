import React from "react";
import "../styles/nav.css";

const Nav = () => {
  return (
    <>
      <div className="navContainer">
        <div className="linkButtons">
          <a href="#">ABOUT</a>
        </div>
        <div className="linkButtons">
          <a href="#">PROJECTS</a>
        </div>
        <div className="linkButtons">
          <a href="#">CONTACT</a>
        </div>
      </div>
    </>
  );
};

export default Nav;
