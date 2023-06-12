import logo from "../../assets/Images/Logoipopng.png";
import "../../Css/style.css";
import {Link} from "react-router-dom";

export default function Header() {
  return (
    <header className="container cabeza">
      <img src={logo} alt="logo" />
      <div className="buscador">
        <input type="search" name="buscador" placeholder="Buscar Producto" />
      </div>
      <div>
        <Link  to="/Carrito" className="btnn" id="comprar" href="carrito.html" name="carrito">
          Carrito<span>1</span>
        </Link>
      </div>
    </header>
  );
}
