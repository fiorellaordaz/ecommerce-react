import Header from "../../src/Components/Header";
import Navbar from "../../src/Components/Navbar";
import Cards from "../../src/Components/Cards";
import Selection from "../../src/Components/Selection";
import { selec } from "../../src/Components/Selection/selec";
import { card } from "../../src/Components/Cards/Dummicards/cards";
import Footer from "../../src/Components/Footer";
import "../../src/Css/estilos.css";

export default function Products() {
  return (
    <>
      <Header />
      <Navbar />
      <Cards element={card} />
      <Selection selection={selec} />
      <Footer />
      <Header />
    </>
  );
}
