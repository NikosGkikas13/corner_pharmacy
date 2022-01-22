import React from "react";
import "../../css/product.css";
const SingleProduct = (props) => {
  return (
    <div className="single_product">
      <article>
        <h1>{props.title}</h1>
        <h2>{props.description}</h2>
      </article>
      <img src={props.img} alt={props.title} style={props.imgClass} />
      <div></div>
    </div>
  );
};

export default SingleProduct;
