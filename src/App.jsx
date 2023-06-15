import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./views/Home/Home";
import Products from "./views/Products/Products";
import Carrito from "./views/Carrito/Carrito";
import FormasPago from "./views/FormasPago/FormasPago";
import Finalizar from "./views/Finalizar/Finalizar";
import DetalleProducto from "./views/DetalleProductos/DetalleProducto";
import Layout from "./Components/Navbar/Layout";
import Header from "./Components/Header";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route element={<Header />} />
          <Route index element={<Home />} />

          <Route path="products">
            <Route index element={<Products />} />
            <Route path=":id" element={<DetalleProducto />} />
          </Route>

          <Route path="formasPago" element={<FormasPago />} />
          <Route path="finalizar" element={<Finalizar />} />
          <Route path="carrito" element={<Carrito />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
