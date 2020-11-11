import React from "react";
import "../styles/projects.css";
import Project1 from "../images/project1.mp4";
import Project2 from "../images/project2.mp4";
import Project3 from "../images/project3.mp4";
import Project4 from "../images/project4.mp4";

const Projects = () => {
  return (
    <>
      <div className="projectContainer">
        <div className="projectHeading" id="projectHead">
          Projects
        </div>
        <div className="projectCardContainer">
          <div className="projectCard">
            <div className="projectTitle">MTG Game</div>
            <div className="projectVideoContainer">
              <video className="projectVideo" autoPlay loop muted>
                <source src={Project4} type="video/mp4" />
              </video>
            </div>
            <div className="projectDescription">
              Final project of a 12-week long intensive bootcamp at
              GeneralyAssembly resulted in the preliminary build of a Magic: The
              Gathering game where a user can play against the Computer. The app
              was developed using create-react-app and attempts to tackle many
              of the more difficult aspects of React.js such as functional
              components and the use of hooks.
            </div>
            <div className="projectLinks">
              <a href="https://mtg-game-beta.netlify.app/">Live</a> //{" "}
              <a href="https://github.com/yang-rich/mtg-game">Repo</a>
            </div>
          </div>
          <div className="projectCard">
            <div className="projectTitle">travelGram</div>
            <div className="projectVideoContainer">
              <video className="projectVideo" autoPlay loop muted>
                <source src={Project3} type="video/mp4" />
              </video>
            </div>
            <div className="projectDescription">
              Project centered around the implementation of CRUD. Created an app
              based on the idea of instagram that allows users post images as
              well as comments. Biggest takeaway personally was learning how to
              set up forms to maintain their previous values so edits can be
              done without filling in every field again.
            </div>
            <div className="projectLinks">
              <a href="https://travel-gram-app.herokuapp.com/">Live</a> //{" "}
              <a href="https://github.com/onerivas/CardGameApp">Repo</a>
            </div>
          </div>
        </div>
        <div className="projectCardContainer">
          <div className="projectCard">
            <div className="projectTitle">Ramajohns Movie App</div>
            <div className="projectVideoContainer">
              <video className="projectVideo" autoPlay loop muted>
                <source src={Project2} type="video/mp4" />
              </video>
            </div>
            <div className="projectDescription">
              Developed a movie night app with the intention of allowing my
              friends to be able to come to the site and see what we had
              scheduled for upcoming movie nights and the list of available
              titles. I decided I wanted to use drag and drop functionality to
              place titles into the scheduled slots and proceeded to figure out
              a way to do so. This was built with ejs with a backend using
              mongoDB.
            </div>
            <div className="projectLinks">
              <a href="https://movie-app-2020.herokuapp.com/movies">Live</a> //{" "}
              <a href="https://github.com/yang-rich/project2">Repo</a>
            </div>
          </div>
          <div className="projectCard">
            <div className="projectTitle">BDO Class App</div>
            <div className="projectVideoContainer">
              <video className="projectVideo" autoPlay loop muted>
                <source src={Project1} type="video/mp4" />
              </video>
            </div>
            <div className="projectDescription">
              A tracking app that helps new players look up pricing of items
              from the video game Black Desert Online. App works off API calls
              to pull pricing of in-game items. I decided to take the
              opportunity to experiment with various CSS features such as
              mouse-over/hover effects as well as the handling of videos within
              modals.
            </div>
            <div className="projectLinks">
              <a href="https://yang-rich.github.io/BDO_CLASS_APP/">Live</a> //{" "}
              <a href="https://github.com/yang-rich/yang-rich.github.io/tree/master/BDO_CLASS_APP">
                Repo
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
