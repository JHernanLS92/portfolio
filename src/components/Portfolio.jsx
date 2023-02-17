import React from "react";
import images from "../assets/images";

const Portfolio = () => {
  return (
    <div className="Portfolio container">
      <h1>Portfolio</h1>
      <div className="bodyCards">
        <div className="card">
          <div className="imgCard">
            <img src={images.ecommerce} className="imgCard" />
          </div>
          <div className="cardInfo">
            <h1>Ecomerce</h1>

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
            <h1>Cards</h1>

            <p> Apicacion de tarjetas con fraces de faomosos desarrollado con: </p>
            <div>vanilla JavaScript y CSS</div>
            <a className="btnCard" href="https://famousquotesjhernan.netlify.app">
              Go netlify
            </a>
          </div>
        </div>

        <div className="card">
          <div className="imgCard">
            <img src={images.pokedex} className="imgCard" />
          </div>
          <div className="cardInfo">
            <h1>Pokedex</h1>

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
            <h1>Rick and Morty API</h1>

            <p> Apicacion de catalogo de mundos de la serie se implelemnta paginacion y busqueda por ID en el consumo de la API desarrollado con: </p>
            <div>JavaScript / CSS / React / Json / useEfect / useStates</div>
            <a className="btnCard" href="https://rickandmortyjhernan.netlify.app">
              Go netlify
            </a>
          </div>
        </div>

        <div className="card">
          <div className="imgCard">
            <img src={images.ecommerceReact} className="imgCard" />
          </div>
          <div className="cardInfo">
            <h1>Ecomerce React</h1>

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
            <h1>Wether API</h1>

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
