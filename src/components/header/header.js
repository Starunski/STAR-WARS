import React from "react";
import "./header.css";
import logo from './2.png'

const Header = () => {
  return (
    <div className="header " >
      <div><h1> <img src={logo} className='logo'/> </h1></div>
      <ul className="nav ">
        <li className="nav-item">
          <a className="nav-link active" href="#">
            People
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">
            Planet
          </a>
        </li>
        <li className="nav-item">
        <a className="nav-link active" href="#">
        Starship
          </a></li>
      </ul>
    </div>
  );
};

export default Header;
