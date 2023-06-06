
import './App.css'
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Cards from './Components/Cards';

const card = [
  {
    images:"https://flormiel.com/floristeria/wp-content/uploads/2019/05/Desayuno-Luz.jpg",
    titleCard: "Desayuno: Delicada tentación",
    price: 30.50,
    subtitleCard: "Desayuno Variado con flores de temporada",
    buttonCard: "Ver más",
    linkTo: "Ver"
  },
  {
    images:"https://flormiel.com/floristeria/wp-content/uploads/2019/05/Desayuno-Luz.jpg",
    titleCard: "Desayuno: Delicada tentación",
    price: 30.50,
    subtitleCard: "Desayuno Variado con flores de temporada",
    buttonCard: "Ver más",
    linkTo: "Ver"
  },
  {
    images:"https://flormiel.com/floristeria/wp-content/uploads/2019/05/Desayuno-Luz.jpg",
    titleCard: "Desayuno: Delicada tentación",
    price: 30.50,
    subtitleCard: "Desayuno Variado con flores de temporada",
    buttonCard: "Ver más",
    linkTo: "Ver"
  },
  {
    images:"https://flormiel.com/floristeria/wp-content/uploads/2019/05/Desayuno-Luz.jpg",
    titleCard: "Desayuno: Delicada tentación",
    price: 30.50,
    subtitleCard: "Desayuno Variado con flores de temporada",
    buttonCard: "Ver más",
    linkTo: "Ver"
  }
];

export default function App() {

  return( <>
          < Header/>
          <Navbar/>
          <Cards element={card}/>
  
        </>
        )
}


