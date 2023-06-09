import logo from "../../assets/Images/Logoipopng.png";
import "../../Css/style.css";

export default function Header() {
  return (
    <header className="container cabeza">
      <img src={logo} alt="logo" />
      <div>
        <input type="search" name="buscador" placeholder="Buscar Producto" />
      </div>
    </header>
  );
}
