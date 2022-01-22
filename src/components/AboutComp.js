import React, { createContext, useContext } from "react";
import "../css/about-us.css";
import Counter from "./about-us-components/Counter";
import { aboutUsDataEN } from "../data/aboutUsData";
import WhyUs from "./about-us-components/WhyUs";
import MainDiv from "./about-us-components/MainDiv";
import { LangContext } from "../App";
const AboutComp = () => {
  const langValue = useContext(LangContext);
  console.log(langValue);

  return (
    <div class="about-comp">
      <MainDiv
        title={langValue[1].about.main[0].title}
        text={langValue[1].about.main[0].text}
      />
      <div className="why_us">
        <div className="why_us_text white">
          <h1>{langValue[1].about.why_choose}</h1>
          <p>{langValue[1].about.paragraph}</p>
        </div>
        <div className="why_us_comp_div">
          {langValue[1].about.why_us.map((item) => {
            return (
              <WhyUs
                icon={item.icon}
                header={item.header}
                text={item.text}
                hover={item.icon_hover}
              />
            );
          })}
        </div>
      </div>
      <div className="counters_div">
        {langValue[1].about.counter.map((item) => {
          return <Counter min={item.min} max={item.max} title={item.title} />;
        })}
      </div>
    </div>
  );
};

export default AboutComp;
