import React from "react";
import { Carousel } from "react-bootstrap";
const Carrousel = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block img-carrousel"
            src="https://www.welcomeargentina.com/villacarlospaz/imagenes/villa-carlos-paz-26.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block img-carrousel"
            src="https://media.staticontent.com/media/pictures/a27f56ca-be2d-4532-a280-24d298b3b718"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block img-carrousel"
            src="https://www.villacarlospaz.com/GaleriaFotos/imgs/galerias/Foto_70199172.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Carrousel;
