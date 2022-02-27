import React, { useContext } from "react";
import Nav from "./Nav";
import "../css/home.css";
import homepage from "../images/homepage.jpg";
import { Link } from "react-router-dom";
import pharmacist from "../images/pharmacist.png";
import { homeDataEN, servicesEN } from "../data/homeData";
import Service_tab from "./Service_tab";
import AboutUs from "./homeComponents/AboutUs";
import Services from "./homeComponents/Services";
import Products from "./homeComponents/Products";
import { LangContext } from "../App";
import Bar from "./Bar";
import Slider from "react-slick";
import { Data } from "@react-google-maps/api";

const Home = () => {
  const langValue = useContext(LangContext);

  return (
    <div className="homepage">
      <div className="firstPanel">
        <Slider arrows={false}>
          {langValue[5].home[0].homeSlider.map((item) => {
            return <img src={item} alt="" />;
          })}
        </Slider>
      </div>
      <Bar />
      <AboutUs text={langValue[5].home[0].aboutUs} />
      <Products />
      <Services services={langValue[7].services} />
    </div>
  );
};

export default Home;
