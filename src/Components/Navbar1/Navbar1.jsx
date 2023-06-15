import "../../Css/style.css";
import { Link } from "react-router-dom";

export default function Navbar1({ existUser }) {
  return (
    <>
      <nav id="navegador">
        <div className="detalles-nav">
          <div className="col-izq">
            <ul>
              <li>
                <Link to="/">Inicio</Link>
              </li>
              <li>
                <Link to="/products">Productos</Link>
              </li>
              <li>
                <Link to="/carrito">Carrito</Link>
              </li>
              <li>
                <Link to="/detalleProducto">Detalles de Productos</Link>
              </li>
            </ul>
          </div>
          {existUser ? (
            <div className="col-der">
              <ul>
                <li>
                  <Link to="/">logout</Link>
                </li>
              </ul>
            </div>
          ) : null}
        </div>
      </nav>
    </>
  );
}
