import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Home";
import Productos from "./Productos";
import Galeria from './Galeria'

export default function Router() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route exact path="/galeria" component={Galeria} />
      <Route exact path="/product" component={Productos} />
    </BrowserRouter>
  );
}
