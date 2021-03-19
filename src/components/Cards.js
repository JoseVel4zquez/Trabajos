import React from "react";
import Card from "./Card";
import house from "../images/house.jpg";
import "../components/css/home.css";

const cards = [
  {
    id: 1,
    title: "Trabajos",
    image: house,
    url: "https://kstech.club",
    //text: 'Esto es una prueba chida xd'
  },
  {
    id: 2,
    title: "Titulo",
    image: house,
    url: "https://kstech.club",
  },
  {
    id: 3,
    title: "Titulo",
    image: house,
    url: "https://kstech.club",
  },
  {
    id: 4,
    title: "Titulo",
    image: house,
    url: "https://kstech.club",
  },
  {
    id: 5,
    title: "Titulo",
    image: house,
    url: "https://kstech.club",
  },
  {
    id: 6,
    title: "Marcas",
    image: house,
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
