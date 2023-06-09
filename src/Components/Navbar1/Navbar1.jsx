import "../../Css/style.css";

export default function Navbar1() {
  return (
    <>
      <nav id="navegador">
        <div className="detalles-nav">
          <div className="col-izq">
            <ul>
              <li>
                <a href="../html/index.html">Inicio</a>
              </li>
              <li>
                <a href="../html/productos.html">Productos</a>
              </li>
              <li>
                <a href="../html/carrito.html">Carrito</a>
              </li>
              <li>
                <a href="../html/detallesproductos.html">
                  Detalles de Productos
                </a>
              </li>
            </ul>
          </div>
          <div className="col-der">
            <ul>
              <li>
                <a href="carrito.html">Mis Pedidos</a>
              </li>
              <li>
                <a href="index.html">logout</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
