import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./functions/NavBarFunction.js";
import "./css/Navbar.css";
import Logo from "../images/logo.png";

export default function Navbar() {
  return (
    <header>
      <nav>
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="icono" id="icono">
          <span>
            <FontAwesomeIcon icon={faAlignJustify} />
          </span>
        </div>
        <div className="enlaces uno" id="enlaces">
            <Link to="/" className="active">
              Home
            </Link>
            <Link to="/galeria">Galeria</Link>
          <Link to="/product">Productos</Link>
        </div>
      </nav>
      <div className="textos">
        <h1>Trabajos en general</h1>
        <h2>Las mejores instalaciones </h2>
      </div>
    </header>
  );
}
