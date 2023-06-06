import '../../Css/style.css';

export default function Navbar() {
    return (
        <div id="inicio">
    <nav className="container" >

    <div id="navegador" className="col-izq">
        <ul>
        <li><a className="link" href="../html/index.html">Inicio</a></li>
        <li><a className="link" href="../html/productos.html">Productos</a></li>
        <li><a className="link" href="../html/carrito.html">Carrito</a></li>
        <li><a className="link" href="../html/detallesproductos.html">Detalles de Productos</a></li>
    </ul>
    </div>
    </nav> 
</div>
    )
}


