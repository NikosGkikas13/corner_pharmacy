import React from "react";
import "../css/service_tab.css";

const Service_tab = (props) => {
  return (
    <div className="service_tab">
      <h1>{props.data.title}</h1>
      <img className="service_icon" src={props.data.icon} alt="icon" />
      <p>{props.data.text}</p>
    </div>
  );
};

export default Service_tab;
