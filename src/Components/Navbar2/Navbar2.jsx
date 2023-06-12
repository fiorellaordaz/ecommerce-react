import "../../Css/style.css";
import logo from "../../assets/Images/logoipopng.png";
import {Link} from "react-router-dom";

export default function Navbar2(){
    return(
        <header className="pedido">
        <div className="cabeza">
            <img src= {logo} alt="logo" width="80px" height="auto"/>
        </div>
    <div className="botones">
    <button><Link to="/Carrito" name="carrito">Carrito</Link></button>
    <button><Link to="/FormasPago" name="forma de pago">Forma de Pago</Link></button>
    <button><Link to="/Finalizar" name="Finalizar Pedido">Finalizar Pedido</Link></button>
    </div>
</header>
    )
}