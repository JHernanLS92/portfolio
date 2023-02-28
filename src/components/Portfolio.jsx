import React from "react";
import images from "../assets/images";
import "../assets/css/portfolio.css"

const Portfolio = () => {
  return (
    <div className="Portfolio">
      <h1>Portfolio</h1>
      <div className="ContainPortfolio">
        
        <div className="card">
          <div className="imgCard">
            <img src={images.ecommerce} className="imgCard" />
          </div>
          <div className="cardInfo">
            <h2>Ecomerce</h2>

            <p>Apicacion de compras en linea desarrollado con: </p>
            <div>vanilla JavaScript y CSS</div>
            <a className="btnCard" href="https://ecomercejhernan.netlify.app">
              Go netlify
            </a>
          </div>
        </div>
 
        <div className="card">
          <div className="imgCard">
            <img src={images.cards} className="imgCard" />
          </div>
          <div className="cardInfo">
            <h2>Cards</h2>

            <p> Apicacion de tarjetas con fraces de faomosos desarrollado con: </p>
            <div>vanilla JavaScript y CSS</div>
            <a className="btnCard" href="https://famousquotesjhernan.netlify.app">
              Go netlify
            </a>
          </div>
        </div>
      
      </div>
    </div>
  );
};

export default Portfolio;
