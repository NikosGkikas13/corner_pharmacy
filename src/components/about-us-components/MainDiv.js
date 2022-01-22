import React from "react";
import "../../css/about-us.css";
const MainDiv = (props) => {
  const { title, text } = props;
  return (
    <div className="main-div">
      <div className="main-text">
        <h1>{title}</h1>
        <br />
        <p>{text}</p>
      </div>
    </div>
  );
};

export default MainDiv;
