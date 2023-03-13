import React from "react";
import MainMenuCard from './Components/MainMenuCard.jsx';
import powerbank from './Photos/pw.png'
import iqos from './Photos/iqos.png'
import vape from './Photos/vape.png'
import nag from './Photos/nag.png'
import glo from './Photos/glo.png'
  
const Home = () => {
  return (
    
    <React.StrictMode>
    <div class="ctg" >Категорії товарів</div>
    <MainMenuCard img ={nag} title="Системи нагрівання тютюну"/>
    <MainMenuCard img ={iqos} title="Iqos"/>
    <MainMenuCard img ={glo} title="GLO"/>
    <MainMenuCard img ={vape} title="JOUZ"/>
    <MainMenuCard img ={powerbank}  title="Павербанки та зар. станції"/>
    <div class = "tovar"> <a href="/heater">Підібрати товар</a></div>
    </React.StrictMode>
)};
  
export default Home;