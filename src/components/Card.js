import React from 'react'
import PropTypes from 'prop-types';
import './css/cards.css';

function Card({title, imageSrc, text, url}){
    return(
        <div className="card text-center bg-dark animate__animated animate__fadeInUp">
            <div className="overflow">
                <img src={imageSrc} alt="/" className="card-img-top"/>
            </div>
            <div className="card-body text-light">
                <h4 className="card-title">{title}</h4>
                <p className="card-text text-light">{
                    text ? text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porttitor sollicitudin congue. Nullam ac justo elementum, fringilla magna ac, cursus orci. Vivamus rutrum tortor urna, et condimentum orci venenatis eu. Integer tortor mauris, ornare id dolor a, scelerisque aliquam leo.'
                }</p>
                <a href={url} className="btn btn-outline-secondary rounded-0" target="_blank">
                    Ve este website
                </a>
            </div>
        </div>
    )
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string,
    imageSrc: PropTypes.string,
    text: PropTypes.string
}

export default Card