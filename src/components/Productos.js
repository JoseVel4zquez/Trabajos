import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Nabvar from "./Navbar";

export default function Productos({ title, brand, image, infoProduct }) {
  console.log(title);
  return (
    <div>
      <Nabvar />
      <div className="card text-center bg-dark animate__animated animate__fadeInUp">
        <div className="overflow">
          <img src={image} alt="/" className="card-img-top" />
        </div>
        <div className="card-body text-light">
          <h4 className="card-title">{title}</h4>
          <p className="card-text text-light">
            {infoProduct
              ? infoProduct
              : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porttitor sollicitudin congue. Nullam ac justo elementum, fringilla magna ac, cursus orci. Vivamus rutrum tortor urna, et condimentum orci venenatis eu. Integer tortor mauris, ornare id dolor a, scelerisque aliquam leo."}
          </p>
          <img src={brand} alt="" className="h-50 w-50 " />
          {/* <a
          href={url}
          className="btn btn-outline-secondary rounded-0"
          target="_blank"
        >
          Ve este website
        </a> */}
          {/* <Link to="/product" className="btn btn-outline-secondary rounded-0">
          Informacion del producto
        </Link> */}
        </div>
      </div>
    </div>
  );
}
