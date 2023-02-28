import React from "react";
import "../assets/css/aboutMe.css";
import images from "../assets/images";

const AboutMe = () => {
  return (
    <div className="AboutMe">
      <div className="ContainAbout">
        <h1>About me</h1>

        <div className="containInfo">
          <div className="me">
            <img src={images.me} className="me" />
          </div>
          <div className="aboutInfo">
            <p>
              I am a software engineer, graduated from the Autonomous University
              of Querétaro and reactivating my development skills at Academlo as
              a full stack web developer, leaning a little more towards front
              end development, using technologies such as ReactJS, nodeJS,
              NextJs taking off on netlify and vercel, with a good command of
              html, css and javascript, learning new free technologies and
              growing as a programmer
            </p>
            <h3>Work</h3>
            <p>
              I have my business a stationery in which I am currently working as
              a manager, before this I was a supervisor in a company called CIFO
              technologies, in which I was in charge of managing monthly reports
              and the control of more than 30 people in my charge
            </p>
          </div>
        </div>

        <div className="Tech">
          <img src={images.netlify} className="netlify" />
          <img src={images.node} className="node" />
          <img src={images.js} className="js" />
          <img src={images.html} className="html" />
          <img src={images.css} className="css" />
          <img src={images.react} className="react" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
