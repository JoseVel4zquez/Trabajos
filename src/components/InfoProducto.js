import React from "react";
import Aire2 from "../images/mini-split-x3.jpg";
import Aire3 from "../images/aire3.jpg";
import Aire4 from "../images/minisplit1.jpg";
import Aire5 from "../images/minisplitTrane.png";
import Aire6 from "../images/4MXW16.png";
import Aire7 from "../images/4MXW23.png";
import Aire8 from "../images/splitDuventus.png";
import Mirage from "../images/mirage.PNG";
import Trane from "../images/logoTrane.png";
import Duventus from "../images/duventus.png";
import "./css/cards.css";

const products = [
  {
    id: 1,
    title: "MINISPLIT Q17 INVERTER 1.5 TON 220 FRÍO",
    brand: Mirage,
    Image: Aire3,
    infoProduct:
      "Mayor rapidez de enfriamiento, Refrigerante R410 ecológico, Uso eficiente de la potencia, Menor consumo de energía, Ambiente silencioso",
  },
  {
    id: 2,
    title: "MINI SPLIT X3 1.5 TON FRÍO - CALOR 220 i",
    brand: Mirage,
    Image: Aire2,
    infoProduct:
      "Core en compresor Doble escala de temperatura, Smart swing, High memory Refrigerante R22",
  },
  {
    id: 3,
    title: "MINISPLIT Q17 INVERTER 1 TON 220 FRÍO",
    brand: Mirage,
    Image: Aire4,
    infoProduct:
      "Mayor rapidez de enfriamiento, Refrigerante R410 ecológico, Uso eficiente de la potencia, Menor consumo de energí, Ambiente silencioso",
  },
  {
    id: 4,
    title: "4MC(W)W15",
    brand: Trane,
    Image: Aire5,
    infoProduct:
      "Sistema de eficiencia estándar (hasta 12.9 seer), 60 hz, High Wall, R-410, de 12 a 36 MBH., 5 velocidades: baja, media, alta, turbo y “mute”, Función I-Feel, Mejor distribución de aire con auto-swing y smart air flow, Temporizador, Re-arranque automático, Funciones “eco” y “sleep”, Bajo ruido, Auto-diagnóstico",
  },
  {
    id: 5,
    title: "4MXW16",
    brand: Trane,
    Image: Aire6,
    infoProduct:
      "Sistema Inverter de alta eficiencia (16 SEER), 60 hz, High Wall, R-410., 4 velocidades: baja, media, alta y turbo, Función I-Feel, 3D swing(arriba/abajo y derecha/ izquierda), Temporizador, Re-arranque automático y dispositivo protector del compresor, Funciones “eco” y “sleep”, Auto-limpieza, Auto-diagnóstico, Protector anti-corrosivo: Blue Fin, Certificación AHRI",
  },
  {
    id: 6,
    title: "4MXW23",
    brand: Trane,
    Image: Aire7,
    infoProduct:
      "Sistema Inverter de alta eficiencia (23 SEER), 60 hz, High Wall, R-410., 4 velocidades: baja, media, alta y turbo, Función I-Feel, 3D swing(arriba/abajo y derecha/ izquierda), Temporizador, Re-arranque automático y dispositivo protector del compresor, Funciones “eco” y “sleep” con “sleep curves” + temporizador, Bajo ruido, Auto-limpieza, Auto-diagnóstico, Protector anti-corrosivo: Blue Fin, Certificación AHRI y listado ETL",
  },
  {
    id: 7,
    title: "Classic DuVentus",
    brand: Duventus,
    Image: Aire8,
    infoProduct:
      "Mini Split tradicional con alta eficiencia enfocada en el ahorro y el cuidado del medio ambiente con el gas ecológico R410 A. “Creado para maximizar tú confort.”",
  },
];

function InfoProducto() {
  return (
    <div>
      <h1 className="text-center mt-5 titulo">Nuestros Productos</h1>
      <div className="container-fluid d-flex justify-content-center align-items-center">
        <div className="row row-cols-2 row-cols-sm-2  row-cols-md-4">
          {products.map((product) => (
            <div className="mt-5 mb-5 col-md-4" key={product.id}>
              <div className="card text-center bg-dark animate__animated animate__fadeInUp h-100">
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
