import "../../Css/style.css";

function Selection({ selection }) {
  return (
    <>
      <div className="selection">
        {selection?.map((item, index) => (
          <section key={index} id="selec" className="container beneficios">
            <div className="beneficios1">
              <img
                src={item.imagen}
                alt="seguro"
                width="50px"
                height="auto"
              ></img>
              <div>
                <h4 className="h5">{item.title}</h4>
                <h5 className="text_small">{item.subtitle}</h5>
              </div>
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
export default Selection;
