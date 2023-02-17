import { Link } from "react-router-dom";
import { React, useState } from "react";
import "../assets/css/menu.css";
import images from "../assets/images";

const Menubtn = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="Menubtn">
      <div className="logo" onClick={() => setIsOpen()}>
        <Link to={"/"}>
          <img src={images.logobnya} className="logo" />
        </Link>
      </div>
      <div
        className={`bars_menu ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`line1 ${isOpen && "open"}`}></span>
        <span className={`line2 ${isOpen && "open"}`}></span>
        <span className={`line3 ${isOpen && "open"}`}></span>
      </div>

      <div className={`menu ${isOpen && "open"}`}>
        <ul>
          <Link to={"/aboutme"}>
            <li onClick={() => setIsOpen()}>About Me</li>
          </Link>
          <Link to={"/portfolio"}>
            <li onClick={() => setIsOpen()}>Portfolio</li>
          </Link>
          <Link to={"/skills"}>
            <li onClick={() => setIsOpen()}>Skills</li>
          </Link>
          <Link to={"/contact"}>
            <li onClick={() => setIsOpen()}>Contact me</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Menubtn;
