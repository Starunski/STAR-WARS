import React from "react";
import "./header.css";
import logo from "./2.png";
import { Link } from "react-router-dom";

const Header = ({ onServiceChange }) => {
  return (
    <div className="header ">
      <div>
        <h1>
          <Link to='/#'><img src={logo} className="logo" /> </Link>
        </h1>
      </div>

      <ul className="nav ">
        <li className="nav-item">
          <Link to="/people/" className="nav-link active">
            People
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/planets/" className="nav-link active">
            Planets
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/starships/" className="nav-link active">
            Starships
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link active">
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/secret" className="nav-link active">
            Secret
          </Link>
        </li>



        <button className="btn btn-primary btn-sm" onClick={onServiceChange}>
          Change services
        </button>
      </ul>
    </div>
  );
};

export default Header;
