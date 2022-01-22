import { hover } from "@testing-library/user-event/dist/hover";
import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import SingleProduct from "./SingleProduct";
import slider_arrow from "../../images/slider_arrow.png";
import "../../css/slider.css";
import slider from "react-slick/lib/slider";

const ProductSlider = (props) => {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const small = { width: "250px", height: "150px" };

  const sliderSettings = {
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          slidesToShow: 3,
        },
      },
    ],
  };
  const nextSlider = () => {
    nav1.slickNext();
  };
  const prevSlider = () => {
    nav1.slickPrev();
  };
  return (
    <div>
      <Slider
        asNavFor={nav2}
        ref={(slider1) => setNav1(slider1)}
        fade={true}
        arrows={false}
        className="big_slider"
      >
        {props.products.map((item) => {
          return (
            <SingleProduct
              title={item.title}
              description={item.description}
              products={props.products}
              img={item.img}
            />
          );
        })}
      </Slider>

      <Slider
        asNavFor={nav1}
        ref={(slider2) => setNav2(slider2)}
        slidesToShow={4}
        swipeToSlide={true}
        focusOnSelect={true}
        nextArrow={<img src={slider_arrow} onClick={nextSlider} alt="next" />}
        prevArrow={<img src={slider_arrow} onClick={prevSlider} alt="prev" />}
        className="small_slider"
        {...sliderSettings}
      >
        {props.products.map((item) => {
          return <SingleProduct products={props.products} img={item.img} />;
        })}
      </Slider>
    </div>
  );
};

export default ProductSlider;
