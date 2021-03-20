import React from "react";
import Aire from "../images/aire.jpg";
import Mirage from "../images/mirage.PNG";
import "./css/cards.css";

const products = [
  {
    id: 1,
    title: "Aire Acondicionado",
    brand: Mirage,
    Image: Aire,
    infoProduct: "Este es el mejor aire acondisionado",
  },
  {
    id: 2,
    title: "Aire Acondicionado",
    brand: Mirage,
    Image: Aire,
    infoProduct: "Este es el mejor aire acondisionado",
  },
];

function InfoProducto() {
  return (
    <div>
      <h1 className="text-center mt-5 titulo">Nuestros Productos</h1>
      <div className="container-fluid d-flex justify-content-center align-items-center">
        <div className="row row-cols-2 row-cols-sm-2  row-cols-md-4">
          {products.map((product) => (
            <div class="mt-5 mb-5 col-md-4" key={product.id}>
              <div className="card text-center bg-dark animate__animated animate__fadeInUp h-">
                <div className="overflow">
                  <img src={product.Image} alt="/" className="card-img-top " />
                  <div className="card-body text-light">
                    <h4 className="card-title">{product.title}</h4>
                    <p className="card-text text-light">
                      {product.infoProduct
                        ? product.infoProduct
                        : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porttitor sollicitudin congue. Nullam ac justo elementum, fringilla magna ac, cursus orci. Vivamus rutrum tortor urna, et condimentum orci venenatis eu. Integer tortor mauris, ornare id dolor a, scelerisque aliquam leo."}
                    </p>
                    <img src={product.brand} alt="" className="h-50 w-50 " />

                    {/* //    <Link to="/product" className="btn btn-outline-secondary rounded-0">
        //   Informacion del producto
        // </Link>  */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default InfoProducto;
