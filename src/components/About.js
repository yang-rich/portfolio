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
          <div className="pictureContainer">
            <img src={ProfilePic} className="profilePic" alt="profile"></img>
          </div>
          <p className="aboutMe">
            I am a software engineer with a background in the sales and
            logistics industry. I have always had a passion for solving
            problems, puzzles, games and I bring that same enthusiasm to any
            task at hand. My past leadership roles and experience in working
            together with others ensure I am always in a position to get the job
            done.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
