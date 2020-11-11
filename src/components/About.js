import React from "react";
import "../styles/about.css";
import ProfilePic from "../images/temp.jpg";

const About = () => {
  return (
    <>
      <div className="aboutContainer">
        <div className="title" id="aboutMe">
          About me
        </div>
        <div className="contentContainer">
          <div>
            <img src={ProfilePic} className="profilePic" alt="profile"></img>
          </div>
          <p className="aboutMe">
            I am a developer that just recently finished a 12-week intensive
            full stack bootcamp at General Assembly. I am looking for
            opportunities to further my knowledge while also contributing to
            something bigger. I strive to push my boundaries every day and aim
            to learn something new with every project I take on. I am
            continuously learning and pushing myself to greater heights.{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
