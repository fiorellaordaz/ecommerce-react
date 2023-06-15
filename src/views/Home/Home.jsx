import "../../Css/style.css";

export default function Home() {
  return (
    <>
      <div className="entrada">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="box">
                <div className="login">
                  <div id="form1">
                    <h3>Iniciar Sesión</h3>
                    <p>Accede con tus Datos</p>
                    <input
                      id="email1"
                      type="email"
                      name="email"
                      placeholder="Email"
                    />
                    <input
                      id="password"
                      type="password"
                      name="password"
                      placeholder="Contraseña"
                    />
                    <button
                      id="btonn"
                      className="btnn"
                      type="submit"
                      name="productos"
                    >
                      Iniciar Sesion
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="final">
                <div className="box">
                  <div className="registra">
                    <div id="form">
                      <h3>Registrate</h3>
                      <p>
                        Crea tu cuenta y <span>disfruta de descuentos</span>
                      </p>
                      <input type="text" name="name" placeholder="Nombre" />
                      <input
                        type="text"
                        name="apellido"
                        placeholder="Apellido"
                      />
                      <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Email"
                      />
                      <input
                        id="contra1"
                        type="password"
                        name="contraseña"
                        placeholder="Contraseña"
                      />
                      <input
                        id="contra2"
                        type="password"
                        name="contraseña"
                        placeholder="Repetir contraseña"
                      />
                      <button id="bton" className="btnn" type="submit">
                        Crear Cuenta
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
