import React, { useState } from "react";
import "../../css/about-us.css";
const WhyUs = (props) => {
  const { icon, header, text, hover } = props;
  const [imgUrl, setImgUrl] = useState(icon);
  const mouseOver = () => {
    setImgUrl(hover);
  };
  return (
    <div className="why_us_comp white">
      <div>
        <img
          style={{ width: "50px" }}
          src={imgUrl}
          alt=""
          onMouseOver={mouseOver}
          onMouseLeave={() => setImgUrl(icon)}
        />
      </div>
      <div>
        <h3>{header}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default WhyUs;
