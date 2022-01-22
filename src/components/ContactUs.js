import React, {
  useState,
  useRef,
  useContext,
  createContext,
  useEffect,
} from "react";
import "../css/contact-us.css";
import emailjs from "emailjs-com";
import { contactUsEN } from "../data/contactUsData";
import MapContainer from "./MapContainer";
import { LangContext } from "../App";
const ContactUs = () => {
  const ContactContext = createContext();
  const langValue = useContext(LangContext);

  const ContactInfo = () => {
    const data = useContext(ContactContext);

    return (
      <section id="contact-info">
        {data.info.map((item) => {
          return (
            <div className="infoItem">
              <img src={item.icon} alt="" />
              <h1>{item.text}</h1>
            </div>
          );
        })}
      </section>
    );
  };
  const ContactForm = () => {
    const formRef = useRef();
    const MsgResponse = () => {
      return (
        <div class="response">
          <h1>
            Message sent <br />
            Thank you
          </h1>
        </div>
      );
    };
    const [res, setRes] = useState();
    // SEND EMAIL START
    const sendEmail = (e) => {
      e.preventDefault();

      emailjs
        .sendForm(
          "service_yv95vmc",
          "template_lwl96bh",
          formRef.current,
          "user_B35oAzW0NgKv5OxIKsE6M"
        )
        .then(
          (result) => {
            console.log(result);
            setRes(result.status);
            console.log(res);
          },
          (error) => {
            console.log(error);
          }
        );
    };
    // SEND EMAIL END
    const data = useContext(ContactContext);
    useEffect(() => {
      console.log("1st res is " + res);
      setTimeout(() => {
        setRes();
        console.log("2nd res is " + res);
      }, 5000);
    }, [res]);
    return (
      <section id="contact-form">
        {res && <MsgResponse />}
        <form ref={formRef} onSubmit={sendEmail}>
          <ul>
            <li>
              <label>{data.form[0]}</label>
              <input className="purple" type="text" name="from_name" required />
            </li>
            <li>
              <label>{data.form[1]}</label>
              <input
                className="purple"
                type="text"
                name="user_email"
                required
              />
            </li>
            <li>
              <label>{data.formMessage}</label>
              <textarea
                className="purple"
                type="text"
                name="message"
                required
              />
            </li>
          </ul>
          <button className="purple" type="submit">
            {data.formButton}
          </button>
        </form>
      </section>
    );
  };

  const ContactInfoForm = () => {
    return (
      <div class="contact-info-form">
        <ContactInfo />
        <ContactForm />
      </div>
    );
  };
  return (
    <div id="contact-us">
      <ContactContext.Provider value={langValue[3].contact}>
        <ContactInfoForm />
      </ContactContext.Provider>
      <MapContainer />
    </div>
  );
};

export default ContactUs;
