import React from "react";
import "./About.css";
import AnimatedSentence from "./AnimatedSentence";

function About() {
  return (
    <div className="about">
      <div>
        <AnimatedSentence>
          <p className="aboutsentence">
            I'm a MERN Stack Developer with a passion for creating dynamic web
            applications. My expertise lies in leveraging MongoDB, Express.js,
            React.js, and Node.js to develop full-stack solutions that are both
            functional and user-friendly.I've done projects, showcasing my ability to
            handle complex functionalities and manage data effectively. I'm
            always eager to tackle new challenges and explore innovative
            solutions to complex problems.
          </p>
        </AnimatedSentence>
      </div>
    </div>
  );
}

export default About;
