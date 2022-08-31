import React from "react";
import Card from './Card';



import comida from "../asset/comida.jpg";
import bebidas from "../asset/bebidas.jpg";
import frutas from "../asset/frutas.jpg";


const cards = [
  {
    id: 1,
    title: "Comida",
    image: comida,
    url: "http://localhost:3002/novedades",
  },
  {
    id: 2,
    title: "bebidas",
    image: bebidas,
    url: "http://localhost:3002/novedades",
  },
  {
    id: 3,
    title: "frutas",
    image: frutas,
    url: "http://localhost:3002/novedades",
  },
 
];

function Cards() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {cards.map(({ title, image, url, id }) => (
          <div className="col-md-4" key={id}>
            <Card imageSource={image} title={title} url={url} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;