import React from "react";
import Service_tab from "../Service_tab";
const Services = (props) => {
  return (
    <div className="services">
      <h1
        style={{
          color: "#fff",
          textDecoration: "underline",
          fontSize: "50px",
        }}
      >
        Our Services
      </h1>
      <div className="services_tabs">
        {props.services.map((item) => {
          return <Service_tab data={item} />;
        })}
      </div>
    </div>
  );
};

export default Services;
