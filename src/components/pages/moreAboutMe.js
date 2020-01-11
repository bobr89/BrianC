import React, { Component } from "react";
import Me from "../../Assets/images/me.jpg";
// Experiences
import Founded from "../../Assets/images/founded.png";
import ValidusResearch from "../../Assets/images/validusResearch.png";
import Microsoft from "../../Assets/images/microsoft.jpg";
import Cineplex from "../../Assets/images/cineplex.png";
// Projects
import Via from "../../Assets/images/via.png";
import Harvard from "../../Assets/images/harvard.png";
import UW from "../../Assets/images/uw.jpg";

class MoreAboutMe extends Component {
  render() {
    return (
      <div className="container-fluid">
        <h1>Experience</h1>
        <div className="experiences">
          <img className="Founded" src={Founded} />
          <ul>
            <h6>Software Engineer</h6>
            <li>
              Developed components and panels using ReactJS for an incorporate
              and onboard startup companies application
            </li>
          </ul>
        </div>
        <div className="experiences">
          <img className="Microsoft" src={Microsoft} />
          <ul>
            <h6>Software Developer</h6>
            <li>
              Developed and optimized features using AngularJS for a new
              advertising software launched by Microsoft
            </li>
          </ul>
        </div>
        <div className="experiences">
          <img className="ValidusResearch" src={ValidusResearch} />
          <ul>
            <h6>Full Stack Developer</h6>
            <li>
              Designed and wrote a user dashboard using VueJS to configure
              request and retrieve insurance coverage
            </li>
          </ul>
        </div>
        <div className="experiences">
          <img className="Cineplex" src={Cineplex} />
          <ul>
            <h6>Front-End Developer</h6>
            <li>
              Wrote an invoice builder from front to back end using KnockoutJS
              allowing users to place advertisements in movies
            </li>
          </ul>
        </div>
        <h1>Projects</h1>
        <div className="projects">
          <img className="Via" src={Via} />
          <ul>
            <h6>Via Train Air Brakes Test Automated System</h6>
            <li>
              Android application interfaces with a linux base-station to
              automates air brake tests for Via trains
            </li>
          </ul>
        </div>
        <div className="projects">
          <img className="Harvard" src={Harvard} />
          <ul>
            <h6>Hack Harvard ecoSort App (Winner)</h6>
            <li>
              React application interfaces for a smart waste disposal container
              that scans and filter based on the type of waste
            </li>
          </ul>
        </div>
        <div className="projects">
          <img className="UW" src={UW} />
          <ul>
            <h6>Reinforcement Learning Maze Algorithms</h6>
            <li>
              ECE 493 T25 implementation of SARSA, SARSA lambda and Q Learning
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default MoreAboutMe;
