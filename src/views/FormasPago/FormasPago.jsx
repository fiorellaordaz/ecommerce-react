import Selection from "../../Components/Selection";
import { selec } from "../../Components/Selection/selec";
import Footer from "../../Components/Footer";
import "../../Css/style.css";

export default function FormasPago() {
  return (
    <>
      <>
        <main>
          <a href="../html/productos.html" name="productos">
            Seguir Comprando
          </a>
          <h2>Forma de Pago</h2>
          <div className="box">
            <h4>Mis Tarjetas</h4>
            <form>
              <label htmlFor="mas">
                <input type="radio" name="tarjeta1" value="456123" id="mas" />
                Mastercard12
              </label>
              <label htmlFor="visa">
                <input type="radio" name="tarjeta1" value="456321" id="visa" />
                Mastercard12
              </label>
              <label htmlFor="credito">
                <input
                  type="radio"
                  name="tarjeta1"
                  value="7896321"
                  id="credito"
                />
                Mastercard12
              </label>
              <button type="submit" name="pedido">
                <a href="FinalizardePago.html" name="finalizar">
                  Pagar con esta Tarjeta
                </a>
              </button>
            </form>
          </div>
          <div>
            <p>Añadir Nueva Tarjeta</p>
            <form>
              <img src="." alt="icono de tarjeta" width="50px" height="auto" />
              <input
                type="number"
                name="numero"
                placeholder="Numero de Tarjeta"
              />
              <img
                src="."
                alt="Titular de tarjeta"
                width="50px"
                height="auto"
              />
              <input
                type="text"
                name="nombre"
                placeholder="Titular de Tarjeta"
              />
              <img src="." alt="Caducidad" width="50px" height="auto" />
              <input type="number" name="Caducidad" placeholder="Caducidad" />
              <img src="." alt="codigo seguro" width="50px" height="auto" />
              <input type="nomber" name="nomber" placeholder="Codigo Seguro" />
              <button type="submit" name="añadir" value="Enviar">
                Añadir a mis Tarjetas
              </button>
            </form>
          </div>
        </main>
      </>
      <Selection selection={selec} />
      <Footer />
    </>
  );
}
