import { Link } from 'react-router-dom';
import'../assets/css/menu.css';

const Menubtn = () => {
  return(
  <div className="menuBtn">
    <input type="checkbox" id="btn-menu" />
    <label htmlFor="btn-menu" className="imgBtn">
      <i className="fa-solid fa-bars"></i>
    </label>

    <div className="menu">
      <ul>
        <li>
          <Link to={"/aboutme"}>About Me</Link>
        </li>
        <li>
          <Link to={"/portfolio"}>Portfolio</Link>
        </li>
        <li>
          <Link to={"/skills"}>Skills</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact me</Link>
        </li>
      </ul>
    </div>
  </div>
  );
};

export default Menubtn;