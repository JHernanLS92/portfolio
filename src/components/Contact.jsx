import React from "react";
import "../assets/css/contact.css";
import images from "../assets/images";

const Contact = () => {
  return (
    <div className="Contact">
      <div className="ContainerContact">
        <h1>Contacto</h1>
        <div>
          <img src={images.gmail} alt="" />
          <h3>jhernan.lopez92@gmail.com</h3>
          <img src={images.whatsapp} alt="" />
          <h3>4191126988</h3>
          <img src={images.linkedin} alt="" />
          <h2>Linkedin</h2>
        </div>
      </div>
    </div>
  );
};

export default Contact;
