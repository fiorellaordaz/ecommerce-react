import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Navbar1 from "../Navbar1/Navbar1";
import Selection from "../Selection/Selection";
import { selec } from "../Selection/selec";
import Footer from "../Footer/Footer";

export default function Layout({ existUser }) {
  return (
    <>
      <Header />
      <Navbar1 existUser={existUser} />
      <Outlet />
      <Selection selection={selec} />
      <Footer />
    </>
  );
}
