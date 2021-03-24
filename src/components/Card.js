import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./css/cards.css";

function Card({ title, imageSrc, text, link, btn }) {
  return (
    <div className="card text-center bg-dark animate__animated animate__fadeInUp">
      <div className="overflow">
        <img
          src={imageSrc}
          alt="/"
          className="card-img-top "
          style={{ height: 300 }}
        />
      </div>
      <div className="card-body text-light">
        <h4 className="card-title">{title}</h4>
        <p className="card-text text-light">
          {text
            ? text
            : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porttitor sollicitudin congue. Nullam ac justo elementum, fringilla magna ac, cursus orci. Vivamus rutrum tortor urna, et condimentum orci venenatis eu. Integer tortor mauris, ornare id dolor a, scelerisque aliquam leo."}
        </p>
        {/* <a
          href={Link}
          className="btn btn-outline-secondary rounded-0"
          target="_blank"
        >
          Ve este website
        </a>  */}
        <Link to={link} className="btn btn-outline-secondary rounded-0">
          {btn}
        </Link>
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
  imageSrc: PropTypes.string,
  text: PropTypes.string,
};

export default Card;
