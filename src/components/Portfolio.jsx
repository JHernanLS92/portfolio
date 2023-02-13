import React from 'react';
import images from '../assets/images';
import Carousel from 'react-bootstrap/Carousel';

const Portfolio = () => {
  return (
    <div className='Portfolio container' id='portfolio'>

      <h1>Portafolio</h1>
      <Carousel slide={false}>
        <Carousel.Item>
          <img
            className="d-block w-100 hoverCarousel"
            src={images.ecommerce}
            alt="First slide" />
          <a href="https://ecomercejhernan.netlify.app">
            <div className='backCarousel'>
              <b>Ecomerce</b>
              <p>Apicacion de compras en linea</p>
              <p>Desarrollado con vanilla JavaScript y CSS</p>
            </div>
          </a>

        </Carousel.Item>
        <Carousel.Item >
          <img
            className="d-block w-100 hoverCarousel"
            src={images.cards}
            alt="Second slide"
          />
          <a href='https://famousquotesjhernan.netlify.app'>
            <div className='backCarousel'>
              <b>Cards</b>
              <p>Apicacion de tarjetas con fraces de faomosos</p>
              <p>Desarrollado con vanilla JavaScript y CSS</p>
            </div>
          </a>
        </Carousel.Item>
        <Carousel.Item >
          <img
            className="d-block w-100 hoverCarousel"
            src={images.pokedex}
            alt="Third slide"
          />
          <a href='https://pokedexjh.netlify.app'>
            <div className='backCarousel'>
              <b>Pokedex</b>
              <p>Apicacion de Pokedex con inicio requerido y paginacion al consumir la API </p>
              <p>Desarrollado con JavaScript / CSS / React / Json / useEfect / useStates</p>
            </div>
          </a>
        </Carousel.Item>
        <Carousel.Item >
          <img
            className="d-block w-100 hoverCarousel"
            src={images.RyM}
            alt="Third slide"
          />
          <a href='https://rickandmortyjhernan.netlify.app'>
            <div className='backCarousel' href=''>
              <b>Rick and Morty API</b>
              <p>Apicacion de catalogo de mundos de la serie se implelemnta paginacion y busqueda por ID en el consumo de la API</p>
              <p>Desarrollado con JavaScript / CSS / React / Json / useEfect / useStates</p>
            </div>
          </a>
        </Carousel.Item>
        <Carousel.Item >
          <img
            className="d-block w-100 hoverCarousel"
            src={images.ecommerceReact}
            alt="Third slide"
          />
          <a href='https://ecommerce-reactjh.netlify.app'>
            <div className='backCarousel' href=''>
              <b>Ecomerce React</b>
              <p>Apicacion de compras en linea se creo un JSON para el almacenamiento de los productos y su consumo, y se utiliza login para acceder a compras y carrito</p>
              <p>Desarrollado con JavaScript / CSS / React / Json / useEfect / hashRoutes</p>
            </div>
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 hoverCarousel"
            src={images.weather}
            alt="Third slide"
          />
          <a href='https://weatherjhernan.netlify.app'>
            <div className='backCarousel' href=''>
              <b>Wether API</b>
              <p>Apicacion del clima implementa el consumo de API</p>
              <p>Desarrollado con JavaScript / CSS / React</p>
            </div>
          </a>
        </Carousel.Item>
      </Carousel>

    </div>
  );
};

export default Portfolio;