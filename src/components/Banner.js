import React from "react";
import "../styles/banner.css";
import Background from "../images/Background.mp4";

const Banner = () => {
  return (
    <>
      <div className="banner">
        <div className="videoContainer">
          <video className="videoBanner" autoPlay loop muted>
            <source src={Background} type="video/mp4" />
          </video>
        </div>
        <div className="bannerText">Hello.</div>
        <div className="bannerP">
          My name is Richard Yang
          <br />
          <br />
          I'm a web developer seeking new and exciting opportunities
        </div>
      </div>
    </>
  );
};

export default Banner;
