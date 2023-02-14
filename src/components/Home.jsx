import React from "react";
import images from "../assets/images";
import "../assets/css/App.css";

const Home = () => {

 
  return (
    <div className="Home container" id="home">
        <div className="infoMobile">
            <h1>HELLO.</h1>
            <h1>I AM</h1>
            <h1>HERNÁN</h1>
            <p>FRONTEND DEVELPER</p>
        </div>
        <div className="info">
            <button className="menu1"></button>
            <button className="menu2"></button>
            <button className="menu3"></button>
            <button className="menu4"></button>
        </div>
        <img src={images.program} className="imgHome" />
    </div>
  );
};

export default Home;
