import React, { useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "../css/bar.css";
import { LangContext } from "../App";
const Bar = (props) => {
  const LangValue = useContext(LangContext);
  const { img } = props;
  const sliderSettings = {
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };
  return (
    <div className="bar">
      <Slider
        slidesToShow={9}
        arrows={false}
        autoplay={true}
        autoplaySpeed={1500}
        pauseOnFocus={true}
        pauseOnHover={true}
        swipeToSlide={true}
        {...sliderSettings}
      >
        {LangValue[2].bar.map((item) => {
          return <img src={item.img} alt="" />;
        })}
      </Slider>
    </div>
  );
};

export default Bar;
