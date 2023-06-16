import { Link } from "react-router-dom";
import "../../Css/style.css";

export default function Carrito() {
  return (
    <>
      <div className="boxing">
        <h1>Productos</h1>
        <div className="box1">
          <Link to="/Products" name="productos">
            Seguir Comprando
          </Link>
        </div>
      </div>

      <div className="padreproducto">
        <div>
          <div className="boxing">
            <img src="." alt="producto1" width="100px" height="auto" />

            <div className="element">
              <h4>Nombre del Producto</h4>
              <p>45$</p>
            </div>

            <input
              type="number"
              name="producto"
              width="50px"
              height="auto"
              min="1"
            />

            <button type="reset" name="eliminarproducto" value="enviar">
              papelera
            </button>
          </div>
        </div>
        <div className="card">
        <div className="carro" >
          <h3>Resumen de Pedido</h3>
          <p>parrafo sobre la compra</p>
          <p>$345</p>
          <button type="submit" name="pago">
            <Link to="/Finalizar" name="proceder">
              Proceder al Pago
            </Link>
          </button>
        </div>
        </div>
        </div>
      
    </>
  );
}
