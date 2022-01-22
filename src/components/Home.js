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

const Home = () => {
  const langValue = useContext(LangContext);

  return (
    <div className="homepage">
      <div
        className="firstPanel"
        style={{
          backgroundImage: `url(${homepage})`,
          backgroundPosition: `center -200px`,
        }}
      ></div>
      <div className="homepage_info">
        <h1>{langValue[5].home[0].headline}</h1>
        <p>{langValue[5].home[0].paragraph}</p>
        <div className="how_to_help">
          <div className="opening_hours">
            <h2>{langValue[5].home[0].open}:</h2>
            <table>
              <tr>
                <td>Monday: </td>
                <td>08:00-21:00</td>
              </tr>
              <tr>
                <td>Tuesday: </td>
                <td>08:00-21:00</td>
              </tr>
              <td>Wednesday: </td>
              <td>08:00-21:00</td>
              <tr>
                <td>Thursday: </td>
                <td>08:00-21:00</td>
              </tr>
              <td>Friday: </td>
              <td>08:00-21:00</td>
              <tr>
                <td>Saturday: </td>
                <td>08:30-20:30</td>
              </tr>
              <tr>
                <td>Sunday : </td>
                <td>Closed</td>
              </tr>
            </table>
          </div>
          <div className="ask_doctor">
            <img src={pharmacist} alt="Pharmacist" />
            <div className="ask_div">
              <h2>{langValue[5].home[0].question}</h2>
              <Link to="/contact-us" className="ask_link">
                {langValue[5].home[0].ask}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <AboutUs text={langValue[5].home[0].aboutUs} />
      <Products />
      <Services services={langValue[7].services} />
    </div>
  );
};

export default Home;
