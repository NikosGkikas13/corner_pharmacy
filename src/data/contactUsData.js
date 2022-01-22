import phone from "../images/contact-phone.png";
import address from "../images/contact-address.png";
import email from "../images/contact-email.png";
import clock from "../images/contact-clock.png";
const contactUsEN = {
  info: [
    {
      icon: address,
      key: "Address",
      text: "Leoforos Dionisou 1 & Leoforos Marathonos",
    },
    {
      icon: phone,
      key: "Phone",
      text: "22940-50019",
    },
    {
      icon: email,
      key: "Email",
      text: "info.cornerpharmacy@gmail.com",
    },
    {
      icon: clock,
      key: "Open",
      text: "Monday-Friday: 08:00-21:00, Saturday:08:30-20:30",
    },
  ],
  form: ["Your name", "Your email"],
  formMessage: "Message",
  formButton: "Send",
};
const contactUsGR = {
  info: [
    {
      icon: address,
      key: "Οδός",
      text: "Λεωφόρος Διονύσου 1 & Λεωφόρος Μαραθώνος",
    },
    {
      icon: phone,
      key: "Τηλέφωνο",
      text: "22940-50019",
    },
    {
      icon: email,
      key: "Email",
      text: "info.cornerpharmacy@gmail.com",
    },
    {
      icon: clock,
      key: "Ωράριο",
      text: "Δευτέρα-Παρασκευή: 08:00-21:00, Σάββατο:08:30-20:30",
    },
  ],
  form: ["Όνομα", "Email"],
  formMessage: "Μήνυμα",
  formButton: "Αποστολή",
};
export { contactUsEN, contactUsGR };
