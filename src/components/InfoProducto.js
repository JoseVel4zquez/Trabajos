import React from "react";
import Aire from "../images/aire.jpg";
import Productos from "./Productos";

const products = [
  {
    id: 1,
    title: "Aire Acondicionado",
    brand: "Mirage",
    Image: Aire,
    infoProduct: "Este es el mejor aire acondisionado",
  },
];

function InfoProducto() {
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center">
      <div className="row row-cols-2 row-cols-sm-2  row-cols-md-4">
        {products.map((product) => (
          <div class="mt-5 mb-5 col-md-4" key={product.id}>
            <Productos
              title={product.title}
              brand={product.brand}
              image={product.Image}
              infoProduct={product.infoProduct}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
export default InfoProducto;
