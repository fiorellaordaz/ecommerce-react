import "../../Css/style.css";

export default function DetalleProducto() {
  return (
    <>
      <div>
        <img src="." alt="producto1" width="350" height="auto" />
      </div>
      <div className="info">
        <h2>Perola para el agua</h2>
        <p>te ayudara en casa</p>
        <p>$45</p>
        <button type="number" width="50px" height="auto" min="1"></button>
        <button type="submit" name="producto">
          Añadir al Carrito
        </button>
        <p>Calidad garantizada</p>
      </div>
      <div>
        <div>
          <img src="." alt="caracteristicas" width="50px" height="auto" />
          <h3>Caracteristicas</h3>
        </div>
        <div>
          <img src="." alt="icono" width="50px" height="auto" />
          <p>
            <strong>Lorem ipsum dolor sit amet consectetur,</strong> adipisicing
            elit. Enim accusamus dolorum nulla incidunt quam culpa labore
            distinctio iste, deleniti iusto? Laboriosam, doloremque magni! Amet,
            sint commodi voluptate perferendis accusantium maiores.
          </p>
          <img src="." alt="icono" width="50px" height="auto" />
          <p>
            <strong>Lorem ipsum dolor sit amet consectetur,</strong> adipisicing
            elit. Enim accusamus dolorum nulla incidunt quam culpa labore
            distinctio iste, deleniti iusto? Laboriosam, doloremque magni! Amet,
            sint commodi voluptate perferendis accusantium maiores.
          </p>
          <img src="." alt="icono" width="50px" height="auto" />
          <p>
            <strong>Lorem ipsum dolor sit amet consectetur,</strong> adipisicing
            elit. Enim accusamus dolorum nulla incidunt quam culpa labore
            distinctio iste, deleniti iusto? Laboriosam, doloremque magni! Amet,
            sint commodi voluptate perferendis accusantium maiores.
          </p>
        </div>
        <div>
          <h3>Especificaciones</h3>
          <ul>
            <li>hcisdhbishdb</li>
            <li>hcisdhbishdb</li>
            <li>hcisdhbishdb</li>
            <li>hcisdhbishdb</li>
            <li>hcisdhbishdb</li>
            <li>hcisdhbishdb</li>
            <li>hcisdhbishdb</li>
            <li>hcisdhbishdb</li>
            <li>hcisdhbishdb</li>
          </ul>
        </div>
      </div>
      <div>
        <div>
          <img src="." alt="Opiniones" width="50px" height="auto" />
        </div>
        <div>
          <h2>Opiniones Destacadas</h2>
          <p>Opiniones de nuestros clientes</p>
        </div>
        <div className="box">
          <p>
            jofhwoedfncdsjbncfijdsbnledzevsjlbnkuh bvhdjbs
            kfhiwsofhnhkvzclhzdbnhkvblzdkjnvñhkjzdgbvhbj
          </p>
        </div>
        <div className="rating">
          <i className="bi bi-star-fill main-color"></i>
          <i className="bi bi-star-fill main-color"></i>
          <i className="bi bi-star-fill main-color"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
        </div>
      </div>
    </>
  );
}
