import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";
import { Link } from "react-router-dom";
import "./css/app.css";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";
import AboutComp from "./components/AboutComp";
import Bar from "./components/Bar";
import { DATAEN, DATAGR } from "./data";
import { useState, useContext, createContext } from "react";
export const LangContext = createContext();

function App() {
  const [lang, setLang] = useState(DATAGR);
  const handleLang = [
    () => {
      setLang(DATAEN);
    },
    () => {
      setLang(DATAGR);
    },
  ];
  console.log(handleLang);
  return (
    <div className="App">
      <LangContext.Provider value={lang}>
        <Router>
          <Nav handleLang={handleLang} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" exact element={<AboutComp />} />
            <Route path="/contact-us" exact element={<ContactUs />} />
            <Route path="/*" element={<h1>Page not found</h1>} />
          </Routes>
          <Bar />
          <Footer data={lang[4].footer} />
        </Router>
      </LangContext.Provider>
    </div>
  );
}

export default App;
