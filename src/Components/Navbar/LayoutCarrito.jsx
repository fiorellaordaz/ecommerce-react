import {Outlet} from "react-router-dom";
import Selection from "../Selection/Selection";
import {selec} from "../Selection/selec";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Navbar2 from "../Navbar2/Navbar2";





export default function LayoutCarrito(){
    return(
        <>
        <Navbar2/>
        <Navbar/>
        <Outlet/>
        <Selection selection={selec}/>
        <Footer/>
        </>
    )
}