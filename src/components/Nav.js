import React, { useState, useContext, useEffect } from "react";
import navData from "../data/navData";
import { Link } from "react-router-dom";
import logo from "./../images/logo.png";
import email from "./../images/email.png";
import address from "./../images/address.png";
import tel from "./../images/telephone.png";
import "../css/nav.css";
import { LangContext } from "../App";
import en from "./../images/united-kingdom.png";
import gr from "./../images/greece.png";
import mobileMenu from "../images/mobile-menu.png";

const Nav = (props) => {
  const { handleLang } = props;
  const LangValue = useContext(LangContext);
  const [enabledLang, setEnabledLang] = useState(LangValue[9].img);
  const [disabledLang, setDisabledLang] = useState(
    LangValue[0].lang == "gr" ? en : gr
  );
  const [ismobile, setIsmobile] = useState(false);
  const checkWindowWidth = () => {
    if (window.innerWidth <= 768) {
      setIsmobile(false);
    } else if (window.innerWidth > 768) {
      setIsmobile(true);
    }
  };
  useEffect(() => {
    checkWindowWidth();
    window.addEventListener("resize", () => {
      checkWindowWidth();
      console.log(ismobile);
    });
  });
  //DESKTOP MENU START
  const DesktopMenu = (props) => {
    const { lang, handleLang } = props;
    return (
      <div className="fixed">
        <div className="navInfo">
          <img className="navIcon address" src={address} alt="Logo" />
          {lang[3].contact.info[0].text}
          <img className="navIcon email" src={email} alt="Logo" />
          info.cornerpharmacy@gmail.com
          <img className="navIcon tel" src={tel} alt="Logo" />
          22940-50019
        </div>
        <div className="nav">
          <Link to="/">
            <img className="logo" src={logo} alt="Logo" />
          </Link>
          <div className="desktopLinkDiv">
            {LangValue[6].nav.map((item) => {
              return (
                <Link className="desktopLink link link--io" to={item.link}>
                  {item.name}
                </Link>
              );
            })}
            <div>
              <div className="langs-container">
                <img
                  className={LangValue[0].lang == "gr" ? "selected" : ""}
                  onClick={handleLang[1]}
                  src={gr}
                  alt=""
                />
                <img
                  className={LangValue[0].lang == "en" ? "selected" : ""}
                  onClick={handleLang[0]}
                  src={en}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  // DESKTOP MENU END
  //MOBILE MENU START
  const MobileMenu = (props) => {
    const { lang, handleLang } = props;
    const [mobileInfo, setMobileInfo] = useState("");
    const mobInfo = (item) => {
      setMobileInfo(item);
    };
    const [showMenu, setShowMenu] = useState(false);
    const SubMenu = (props) => {
      return (
        <div className={props.class}>
          <Link to="/">
            <img className="logo" src={logo} alt="Logo" />
          </Link>
          <div className="mobileLinkDiv">
            {LangValue[6].nav.map((item) => {
              return (
                <Link className="mobileLink link " to={item.link}>
                  {item.name}
                </Link>
              );
            })}
            <div>
              <div className="langs-container">
                <img
                  className={LangValue[0].lang == "gr" ? "selected" : ""}
                  onClick={handleLang[1]}
                  src={gr}
                  alt=""
                />
                <img
                  className={LangValue[0].lang == "en" ? "selected" : ""}
                  onClick={handleLang[0]}
                  src={en}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      );
    };
    const subClasses = `submenu ${showMenu && "active"}`;
    return (
      <div className="mobile-menu">
        <div className="navInfo">
          <img
            className="navIcon address"
            src={address}
            alt="Logo"
            onClick={() => mobInfo(lang[3].contact.info[0].text)}
          />
          <p>{lang[3].contact.info[0].text}</p>
          <img
            className="navIcon email"
            src={email}
            alt="Logo"
            onClick={() => mobInfo("info.cornerpharmacy@gmail.com")}
          />
          <p>info.cornerpharmacy@gmail.com</p>
          <img
            className="navIcon tel"
            src={tel}
            alt="Logo"
            onClick={() => mobInfo("22940 - 50019")}
          />
          <p>22940-50019</p>
          <p className="mobile-info">{mobileInfo}</p>
        </div>
        <img
          className="mobile-menu-logo"
          src={mobileMenu}
          alt=""
          onClick={() => setShowMenu(!showMenu)}
        />
        {showMenu && <SubMenu class={subClasses} />}
        {/* <SubMenu class={subClasses} /> */}
      </div>
    );
  };
  //MOBILE MENU END
  return (
    <div>
      {ismobile ? (
        <DesktopMenu lang={LangValue} handleLang={handleLang} />
      ) : (
        <MobileMenu lang={LangValue} handleLang={handleLang} />
      )}
    </div>
  );
};

export default Nav;
