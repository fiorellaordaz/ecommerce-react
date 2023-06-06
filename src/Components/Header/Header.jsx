import logo from '../../assets/Images/Logoipopng.png';
import '../../Css/style.css';

    export default function Header() {
    return (
        <header className="container cabeza">
        <img src={logo} alt="logo"/>
        <input type="search" name="buscador" placeholder="Buscar Producto"/>
        <a className="btn" id="comprar" href="carrito.html" name="carrito">Carrito<span>1</span></a>
</header>
    )
}
