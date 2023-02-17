import React from "react";
import images from "../assets/images";
import "../assets/css/home.css";

const Home = () => {
 
  return (
    <div className="Home container">
        <div className="info">
            <h1>HELLO.</h1>
            <h1>I AM</h1>
            <h1>HERNÁN</h1>
            <p>FRONTEND DEVELPER</p>
        </div>
       
        <img src={images.program} className="imgHome" />
    </div>
  );
};

export default Home;
