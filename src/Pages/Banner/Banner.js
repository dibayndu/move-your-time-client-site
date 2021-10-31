import React from 'react';
import { Carousel } from 'react-bootstrap';
// import banner1 from '../../images/banner/banner-a.jpg';
// import banner2 from '../../../images/Banner/banner-b.jpg';
// import banner3 from '../../../images/Banner/banner-c.jpg';


const Banner = () => {
    return (
        <div className="container mt-3 mb-3">
          <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={'https://i.ibb.co/8YTH1kk/Cappadocia-has-unreal-amazing-landscape-which-makes-Balloon-flights-one-of-worlds-the-top-3-The-spec.jpg'}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Book Your Flight</h3>
      <p>No tricks, just lots of treats!</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={'https://i.ibb.co/Z2JFsBt/banner-b.jpg'}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>TourRadar Spotlight</h3>
      <p>Find out what’s happening at TourRadar - from the latest travel news to our special offers.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={'https://i.ibb.co/N9VNpWH/banner-c.jpg'}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Be Free</h3>
      <p>Feel like a bird,Fly all over the sky</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>  
        </div>
    );
};

export default Banner;