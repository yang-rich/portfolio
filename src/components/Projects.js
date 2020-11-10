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
        <div className="projectHeading">Projects</div>
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
              was developed using create-react-app and attempts to tackles many
              of the more difficult aspects of React.js such as functional
              components and the use of hooks to handle the complicated subject
              of game logic. The current plan is to not only finish writing game
              logic to account for all the special cases invovling card
              abilities but to also implement users and sessions to allow for
              online play between players as well as a separate page that will
              allow players to upload their own decks and generate decks for the
              game using the official API. While React.js may not have been
              intended for game coding, this project has proven a great
              challenge and learning experience.
            </div>
            <div className="projectLinks">
              <a href="#">Live</a> // <a href="#">Repo</a>
            </div>
          </div>
          <div className="projectCard">
            <div className="projectTitle">travelgram</div>
            <div className="projectVideoContainer">
              <video className="projectVideo" autoPlay loop muted>
                <source src={Project3} type="video/mp4" />
              </video>
            </div>
            <div className="projectDescription">
              Project centered around the implementation of CRUD. Created an app
              based on the idea of instagram that allows users post images as
              well as comments. Biggest takeaway personally was learning how to
              either have forms maintain their previous values so edits can be
              done without filling in every field again.
            </div>
            <div className="projectLinks">
              <a href="#">Live</a> // <a href="#">Repo</a>
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
              <a href="#">Live</a> // <a href="#">Repo</a>
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
              <a href="#">Live</a> // <a href="#">Repo</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
