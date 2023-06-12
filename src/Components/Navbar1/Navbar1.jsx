import "../../Css/style.css";
import {Link} from "react-router-dom";

export default function Navbar1() {
  return (
    <>
      <nav id="navegador">
        <div className="detalles-nav">
          <div className="col-izq">
            <ul>
              <li>
                <a> <Link to="/">Inicio</Link></a>
              </li>
              <li>
                <a> <Link to="Products">Productos</Link> </a>
              </li>
              <li>
                <a> <Link to="Carrito">Carrito</Link> </a>
              </li>
              <li>
                <a> <Link to="DetalleProducto">Detalles de Productos</Link> </a>
              </li>
            </ul>
          </div>
          <div className="col-der">
            <ul>
              <li>
                <Link to="/">logout</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
