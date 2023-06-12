import Header from "../Header";
import Navbar1 from "../Navbar1";
import Selection from "../Selection/Selection";
import {selec} from "../Selection/selec";
import Footer from "../Footer/Footer"
import {Outlet} from "react-router-dom";


export default function LayoutProduct(){
        return(
            <>
            <Header/>
            <Navbar1/>
            <Outlet/>
            <Selection selection={selec}/>
            <Footer/>
            
            </>
        )
}