import "./App.css";
import Home from "../Views/Home/Home";
import Products from "../Views/Products/Products";
import Carrito from "../Views/Carrito/Carrito";
import FormasPago from "../Views/FormasPago/FormasPago";
import Finalizar from "../Views/Finalizar/Finalizar";
import DetalleProducto from "../Views/DetalleProductos/DetalleProducto"
import Layout from "../src/Components/Navbar/Layout";
import LayoutProduct from "../src/Components/Navbar/LayoutProduct";
import LayoutCarrito from "../src/Components/Navbar/LayoutCarrito";


import {Routes, Route} from "react-router-dom";

export default function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          </Route>
          <Route path="/" element={<LayoutProduct/>}>
          <Route path="Products" element={<Products/>}/>
          <Route path="DetalleProducto" element={<DetalleProducto/>}/>
          </Route>
          <Route path="/" element={<LayoutCarrito/>}>
          <Route path="Carrito" element={<Carrito/>}/>
          <Route path="FormasPago" element={<FormasPago/>}/>
          <Route path="Finalizar" element={<Finalizar/>}/>
          </Route>
          
          
        </Routes>
  
    </>
  );
}
