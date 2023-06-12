import {Outlet} from "react-router-dom";
import Header1 from "../Header1/Header1";
import Navbar1 from "../Navbar1/Navbar1";
import Selection from "../Selection/Selection";
import {selec} from "../Selection/selec";
import Footer from "../Footer/Footer"

export default function Layout(){
    return(
        <>
        <Header1/>
        <Navbar1/>
        <Outlet/>
        <Selection selection={selec}/>
        <Footer/>
        </>
    );
}