import '../../Css/style.css';
import {Link} from "react-router-dom";

export default function Navbar() {
    return (
        <div id="inicio">
    <nav className="container">

    <div id="navegador" className="col-izq">
        <ul>
        <li> <Link className="link" to="/">Inicio</Link></li>
        <li><Link className="link" to="Products">Productos</Link></li>
        <li><Link className="link" to="Carrito">Carrito</Link></li>
        <li><Link className="link" to="DetalleProducto">Detalles de Productos</Link></li>
    </ul>
    </div>
    </nav> 
</div>
    )
}


