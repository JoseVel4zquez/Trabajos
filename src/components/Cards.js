import React from "react";
import Card from "./Card";

import house from "../images/house.jpg";
import "../components/css/home.css";

const cards = [
  {
    id: 1,
    title: "Minisplit",
    image: house,
    text:
      "La línea de acondicionadores de aire tipo minisplit que  está diseñada para hogares y negocios donde el ahorro de energía es un factor determinante.",
    url: "https://kstech.club",
    //text: 'Esto es una prueba chida xd'
  },
  {
    id: 2,
    title: "Condensadoras",
    image: house,
    text:
      "Descubre los sistemas divididos de condensadoras que te permitirán armar el sistema que se adecúe más a tus necesidades.",
    url: "https://kstech.club",
  },
  {
    id: 3,
    title: "TVR",
    image: house,
    text:
      "Tvr es un sistema modular de HVAC, diseñado para climatizar oficinas, edificios, hoteles, locales comerciales y residencias",
    url: "https://kstech.club",
  },
  {
    id: 4,
    title: "Paquetes(frio)",
    image: house,
    text:
      "Descubre la seleccion de paquetes de enfriamiento que tenemos para ti, tambien contamos con paquetes heat-pump",
    url: "https://kstech.club",
  },
  {
    id: 5,
    title: "Chiller",
    image: house,
    text:
      "Los chillers no solo atienden sistemas de HVAC que proporcionan la temperatura, sino que tambien ayudan a minimizar los costos operativos con niveles superiores de eficiencia energetica",
    url: "https://kstech.club",
  },
];

function Cards() {
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center Home">
      <div className="row row-cols-2 row-cols-sm-2  row-cols-md-4">
        {cards.map((card) => (
          <div className="mt-5 mb-5 col-md-4" key={card.id}>
            <Card
              title={card.title}
              imageSrc={card.image}
              url={card.url}
              text={card.text}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
