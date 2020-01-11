import React, { Component } from "react";
import { Link } from "react-router-dom";
import Me from "../../Assets/images/me.jpg";
import Resume from "../../Assets/docs/resume.pdf";

class Homepage extends Component {
  render() {
    return (
      <div className="container-fluid-1">
        <div className="info">
          <h4>
            I'm Brian Chan, a Computer Engineering student at{" "}
            <a href="https://uwaterloo.ca/">UWaterloo</a> who have interned as
            Full Stack Developer at{" "}
            <a href="https://www.microsoft.com/">Microsoft</a>,{" "}
            <a href="https://founded.co/">Founded</a>,{" "}
            <a href="https://www.validusholdings.com/">Validus Research</a> and{" "}
            <a href="https://www.cineplex.com/">Cineplex</a> where I worked on
            various web applications. I'm interested in web dev and UI design. (
            <Link to="/MoreAboutMe">more about me</Link>)
          </h4>
          <div className="links">
            <a href={Resume}>Resume</a>
            <a href="https://github.com/bobr89/">Github</a>
            <a href="https://www.linkedin.com/in/brian-king-hei-chan/">
              Linkedin
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
