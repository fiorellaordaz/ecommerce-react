import "../../Css/style.css";
import icono1 from "../../assets/Images/Icono/instagram.svg";
import icono2 from "../../assets/Images/Icono/whatsapp.svg";
import icono3 from "../../assets/Images/Icono/face.svg";
import logo from "../../assets/Images/Logoipopng.png";

export default function Footer() {
  return (
    <div className="pistacho">
      <div className="colum-dere">
        <div className="logotipo">
          <img src={logo} alt="logo" width="150px" height="auto" />
        </div>
        <div className="politicas">
          <ul className="">
            <li> Centro de ayuda</li>
            <li> Servicio al consumidor </li>
            <li> Escríbenos</li>
            <li> Servicio teléfonico</li>
          </ul>
          <ul>
            <li>
              <a href="../html/Politica.html">Política de privacidad</a>
            </li>
            <li>
              <a href="../html/Politica.html">Condiciones de compra</a>
            </li>
            <li>
              <a href="../html/detallesproductos.html">Opiniones de clientes</a>
            </li>
            <li>
              <a href="../html/Politica.html">Aviso de privacidad</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="comunidad">
        <h3>Unete a Nuestra Comunidad</h3>
        <div className="suscribe">
          <input
            className="news"
            type="email"
            name="email"
            placeholder="Escribe tu email"
          />
          <button type="submit" name="enviar" value="enviar">
            {" "}
            Suscribirme
          </button>
          <label htmlFor="politica">
            <input type="checkbox" name="politica" id="politica" />
            Acepto <span>la politica de privacidad</span>
          </label>
        </div>
        <div className="redes">
          <h3 className="h5">Siguenos en Redes</h3>
          <div>
            <img src={icono2} alt="whatsapp" width="20px" height="auto" />
            <img src={icono3} alt="facebook" width="20px" height="auto" />
            <img src={icono1} alt="instagram" width="20px" height="auto" />
          </div>
        </div>
      </div>
    </div>
  );
}
