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

        {/* 

            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={images.pokedex} />
              <Card.Body>
                <Card.Title>Pokedex</Card.Title>
                <Card.Text>
                Apicacion de Pokedex con inicio requerido y paginacion al consumir la API
              Desarrollado con JavaScript / CSS / React / Json / useEfect / useStates
                </Card.Text>
                <Button variant="secundary">Go netlify</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={images.RyM} />
              <Card.Body>
                <Card.Title>Rick and Morty API</Card.Title>
                <Card.Text>
                Apicacion de catalogo de mundos de la serie se implelemnta paginacion y busqueda por ID en el consumo de la API
              Desarrollado con JavaScript / CSS / React / Json / useEfect / useStates
                </Card.Text>
                <Button variant="secundary">Go netlify</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={images.ecommerceReact} />
              <Card.Body>
                <Card.Title>Ecomerce React</Card.Title>
                <Card.Text>
                Apicacion de compras en linea se creo un JSON para el almacenamiento de los productos y su consumo, y se utiliza login para acceder a compras y carrito
                Desarrollado con JavaScript / CSS / React / Json / useEfect / hashRoutes
                </Card.Text>
                <Button variant="secundary">Go netlify</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={images.weather} />
              <Card.Body>
                <Card.Title>Wether API</Card.Title>
                <Card.Text>
                Apicacion del clima implementa el consumo de API
                Desarrollado con JavaScript / CSS / React
                </Card.Text>
                <Button variant="secundary">Go netlify</Button>
              </Card.Body>
            </Card> */}
      </div>
    </div>
  );
};

export default Portfolio;
