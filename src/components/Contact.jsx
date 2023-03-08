import React from "react";
import "../assets/css/contact.css";
import images from "../assets/images";

const Contact = () => {
  return (
    <div className="Contact">
      <div className="ContainerContact">
        <h1>Contacto</h1>
        <div className="infoContact">
          <div className="cont">
            <img src={images.gmail} alt="" />
            <h4>jhernan.lopez92@gmail.com</h4>
          </div>
          <div className="cont">
            <img src={images.whatsapp} alt="" />
            <h4>4191126988</h4>
          </div>
          <div className="cont">
            <img src={images.linkedin} alt="" />
            <p>
            https://www.linkedin.com/juanhernanlopezsuaste/
              </p> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
