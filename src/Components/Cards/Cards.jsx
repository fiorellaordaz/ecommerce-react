import "../../Css/style.css";

export default function Cards({ element }) {
  return (
    <div className="d-flex justify-content-evenly">
      {element.map((item, index) => (
        <div key={index} className="Franja-card">
          <div className="card">
            <img
              src={item.images}
              alt="primer producto"
              style={{ width: "24rem" }}
            />
            <div className="info-card">
              <h5 className="h5">{item.titleCard}</h5>
              <div className="item">
                <p>
                  {item.price} <i className="bi bi-currency-euro"></i>
                </p>
                <div className="rating">
                  <i className="bi bi-star-fill main-color"></i>
                  <i className="bi bi-star-fill main-color"></i>
                  <i className="bi bi-star-fill main-color"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
              </div>
              <p>{item.subtitleCard}</p>
              <div className="card-actions">
                <button className="anadir" type="submit" name="boton">
                  {item.buttonCard}
                </button>
                <a className="btn-secundario" href="carrito.html">
                  {item.linkTo}
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
