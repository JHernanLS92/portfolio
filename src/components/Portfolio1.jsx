import React from "react";
import images from "../assets/images";
import "../assets/css/portfolio.css"

const Portfolio = () => {
  return (
    <div className="Portfolio">
     
      <div className="ContainPortfolio">

        <div className="card">
          <div className="imgCard">
            <img src={images.ecommerceReact} className="imgCard" />
          </div>
          <div className="cardInfo">
            <h2>Ecomerce React</h2>

            <p>Apicacion de compras en linea se creo un JSON para el almacenamiento de los productos y su consumo, y se utiliza login para acceder a compras y carrito desarrollado con: </p>
            <div>JavaScript / CSS / React / Json / useEfect / hashRoutes</div>
            <a className="btnCard" href="https://ecommerce-reactjh.netlify.app">
              Go netlify
            </a>
          </div>
        </div>

        <div className="card">
          <div className="imgCard">
            <img src={images.weather} className="imgCard" />
          </div>
          <div className="cardInfo">
            <h2>Wether API</h2>

            <p>Apicacion del clima implementa el consumo de API desarrollado con: </p>
            <div>JavaScript / CSS / React</div>
            <a className="btnCard" href="https://weatherjhernan.netlify.app">
              Go netlify
            </a>
          </div>
        </div> 
      
      </div>
    </div>
  );
};

export default Portfolio;
