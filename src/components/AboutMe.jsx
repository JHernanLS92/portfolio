import React from "react";
import '../assets/css/aboutMe.css';
import images from "../assets/images";

const AboutMe = () => {
  return (
    <div className="Container">
      <div className="AboutMe">
        <img src={images.me} className="me" />
        <h1>About me</h1>
        <p>
I am a software engineer, graduated from the Autonomous University of Querétaro and reactivating my development skills at Academlo as a full stack web developer, leaning a little more towards front end development, using technologies such as ReactJS, nodeJS, NextJs taking off on netlify and vercel, with a good command of html, css and javascript, learning new free technologies and growing as a programmer
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
