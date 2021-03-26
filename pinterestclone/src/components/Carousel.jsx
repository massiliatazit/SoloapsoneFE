import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../styles/carousel.scss";

export default class Carousel extends Component {
  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 3000,
    };

    return (
      <div className="Carousel mt-5">
        <h1>Get your</h1>
        <Slider {...settings} className="slider">
          <div>
            <h1 className="firstSlide">next weeknight dinner idea</h1>
          </div>
          <div>
            <h1 className="secondSlide">home decor idea</h1>
          </div>
          <div>
            <h1 className="thirdSlide">next weeknight dinner idea</h1>
          </div>
          <div>
            <h1 className="fourthSlide"> some home decor idea</h1>
          </div>
        </Slider>
      </div>
    );
  }
}
