import React, { useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import ProductSlider from "./ProductSlider";
import products_bg from "../../images/productsBG.png";
import { productsEN } from "../../data/homeData";
import { LangContext } from "../../App";
const Products = () => {
  const langValue = useContext(LangContext);
  console.log(langValue);
  return (
    <div
      className="products"
      style={{ backgroundImage: `url(${products_bg})` }}
    >
      <div class="pr_container">
        <h1>
          {langValue[0].lang == "en"
            ? "See Our Products"
            : "Δείτε τα προϊόντα μας"}
        </h1>
        <ProductSlider products={langValue[8].products} />
      </div>
    </div>
  );
};

export default Products;
