import React from "react";
import images from "../assets/images";
import "../assets/css/portfolio.css"

const Portfolio = () => {
  return (
    <div className="Portfolio">
      <div className="ContainPortfolio">

        <div className="card">
          <div className="imgCard">
            <img src={images.pokedex} className="imgCard" />
          </div>
          <div className="cardInfo">
            <h2>Pokedex</h2>

            <p> Apicacion de Pokedex con inicio requerido y paginacion al consumir la API desarrollado con: </p>
            <div>JavaScript / CSS / React / Json / useEfect / useStates</div>
            <a className="btnCard" href="https://pokedexjh.netlify.app">
              Go netlify
            </a>
          </div>
        </div>

        <div className="card">
          <div className="imgCard">
            <img src={images.RyM} className="imgCard" />
          </div>
          <div className="cardInfo">
            <h2>Rick and Morty API</h2>

            <p> Apicacion de catalogo de mundos de la serie se implelemnta paginacion y busqueda por ID en el consumo de la API desarrollado con: </p>
            <div>JavaScript / CSS / React / Json / useEfect / useStates</div>
            <a className="btnCard" href="https://rickandmortyjhernan.netlify.app">
              Go netlify
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Portfolio;
