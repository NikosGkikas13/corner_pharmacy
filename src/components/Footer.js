import React from "react";
import logo from "./../images/logo.png";
import "../css/footer.css";

const Footer = (props) => {
  const Logo = (props) => {
    return (
      <div className="footer_div">
        <img
          style={{ width: "120px", marginTop: "-25px" }}
          src={logo}
          alt="logo"
        />
        <h2>{props.data.title}</h2>
        <h3>{props.data.copyrights}</h3>
      </div>
    );
  };
  const Contact = (props) => {
    return (
      <div className="footer_div">
        <h1>{props.data.contact}</h1>
        <h2>{props.data.address}</h2>
        <h2>{props.data.email}</h2>
        <h2>{props.data.tel}</h2>
      </div>
    );
  };
  const Social_media = (props) => {
    return (
      <div className="footer_div">
        <h1>{props.data.find}</h1>
        <div className="icons">
          {props.data.social.map((item) => {
            return (
              <a href={item.link} target="_blank">
                <img src={item.icon} alt="" />
              </a>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <footer>
      <Logo data={props.data} />
      <Contact data={props.data} />
      <Social_media data={props.data} />
    </footer>
  );
};

export default Footer;
