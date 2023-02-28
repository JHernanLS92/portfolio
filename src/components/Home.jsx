import React from "react";
("");
import images from "../assets/images";
import "../assets/css/home.css";

const Home = () => {
  return (
    <div className="Home">
          <div className="Container">

            <div className="imgHome">
                  <img src={images.program} className="imgHome" />
            </div>

                <div className="info">

                      <div className="presentation">
                            <h1>Hi.</h1>
                            <h1>I´m</h1>
                            <h1>Hernán</h1>
                            <h3>Full Stack Development</h3>
                      </div>

                      <div className="socialBtns">
                            <a href="https://www.linkedin.com/in/juanhernanlopezsuaste/">
                              <img src={images.linkedin} alt="" />
                            </a>
                            <a href="https://github.com/JHernanLS92">
                              <img src={images.git} alt="" />
                            </a>
                            <a href="">
                              <b className="cv">CV</b>
                              <img src={images.CV} alt="" />
                            </a>
                      </div>

                </div>

          </div>

    </div>
  );
};

export default Home;
