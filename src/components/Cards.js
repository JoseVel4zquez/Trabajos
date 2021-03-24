import React from "react";
import Card from "./Card";

import house from "../images/house.jpg";
import door from "../images/door.jpg";
import "../components/css/home.css";
import { Link } from "react-router-dom";

const cards = [
  {
    id: 1,
    title: "Minisplit",
    image: house,
    text:
      "La línea de acondicionadores de aire tipo minisplit que  está diseñada para hogares y negocios donde el ahorro de energía es un factor determinante.",
    url: "https://kstech.club",
    Link: "/product",
    btn: "Ver Productos",
    //text: 'Esto es una prueba chida xd'
  },
  {
    id: 2,
    title: "Herreria",
    image: door,
    text:
      "La línea de acondicionadores de aire tipo minisplit que  está diseñada para hogares y negocios donde el ahorro de energía es un factor determinante.",
    url: "https://kstech.club",
    Link: "/galeria",
    btn: "Ver Galeria",
    //text: 'Esto es una prueba chida xd'
  },
  {
    id: 3,
    title: "Ampliaciones",
    image: house,
    text:
      "La línea de acondicionadores de aire tipo minisplit que  está diseñada para hogares y negocios donde el ahorro de energía es un factor determinante.",
    url: "https://kstech.club",
    Link: "/galeria",
    btn: "Ver Galeria",
    //text: 'Esto es una prueba chida xd'
  },
];

function Cards() {
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center Home">
      <div className="row row-cols-2 row-cols-sm-2  row-cols-md-4">
        {cards.map((card) => (
          <div
            className="mt-5 mb-5 col-md-4 initial-scale=1 shrink-to-fit=no"
            key={card.id}
          >
            <Card
              title={card.title}
              imageSrc={card.image}
              url={card.url}
              text={card.text}
              link={card.Link}
              btn={card.btn}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
