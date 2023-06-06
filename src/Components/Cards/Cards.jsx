
import '../../Css/style.css';

export default function Cards({element}) {
    return (
    <>
        {element.map((item,index) => (
        <div key={index} className="Franja-card" >
    <div className="card">
            <img src= {item.images} alt="primer producto" style= {{width:"24rem"}}/>
    <div className="info-card">
        <div className="producto-titulo">
        <h3 className="h4">{item.titleCard}</h3>
        <p>{item.pice} <i className="bi bi-currency-euro"></i></p>
    </div>
    <div className="rating">
        <i className="bi bi-star-fill main-color"></i>
        <i className="bi bi-star-fill main-color"></i>
        <i className="bi bi-star-fill main-color"></i>
        <i className="bi bi-star-fill"></i>
        <i className="bi bi-star-fill"></i>
    </div>
        <p>{item.subtitleCard}</p>
        <div className="card-actions">
        <button className="btn anadir" type="submit" name="boton">{item.buttonCard}</button>
        <a className="btn btn-secundario" href="carrito.html">{item.linkTo}</a>
    </div>
    </div>
    </div>
    </div>
    ))
}
</>
    )

}


        {/* {
            element.map((item) =>( key = {item}

        <div classNameName = "Franja-card">
    <div classNameName="card">
            <img src="../asses/images/rosas.jpg" alt="primer producto"/>
    <div classNameName="info-card">
        <div classNameName="producto-titulo">
        <h3 classNameName="h4">{ittem.titleCard}</h3>
        <p>{item.price} <i classNameName="bi bi-currency-euro"></i></p>
    </div>
    <div classNameName="rating">
        <i classNameName="bi bi-star-fill main-color"></i>
        <i classNameName="bi bi-star-fill main-color"></i>
        <i classNameName="bi bi-star-fill main-color"></i>
        <i classNameName="bi bi-star-fill"></i>
        <i classNameName="bi bi-star-fill"></i>
    </div>
        <p>{item.subtitleCard}</p>
        <div classNameName="card-actions">
        <button classNameName="btn anadir" type="submit" name="boton">{item.buttonCard}</button>
        <a classNameName="btn btn-secundario" href="carrito.html">{item.linkTo}</a>
    </div>
    </div>
    </div>
   
    ))
    } */}

