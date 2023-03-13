import React from "react";
import getData from "./kostyl.js";
import CatalogCard from './Components/CatalogCard.jsx';
import nag from './Photos/nag.png'
//console.log(getData()[1].name);
// import path from 'path';
// import { fileURLToPath } from 'url';
//import myJson from './heaters.json' assert {type: json};
//import { json } from "react-router-dom";

//console.log(myJson);
// import { parseBooleans } from 'xml2js/lib/processors.js';

//const __filename = fileURLToPath(import.meta.url);

//const __dirname = path.dirname(__filename)
//console.log(__dirname);
// let json_data = fs.readFileSync('./heaters.json', "UTF-8", (e, data)=>{
//    if(e) return console.log(e);
//     // let obj = JSON.parse(data)
//     // console.log(obj.yml_catalog.shop[0].offers[0].offer[0]); 
// })

//let json_content = JSON.parse(json_data)
//import CatalogCard from "./Components/CatalogCard.js";
//import { json } from "react-router-dom";
// import data_heaters from "./RetrieveDB.js";
let a =[]
let i = 0
const Heater = () =>{

  for(let i = 0; i < getData().length; i++){
    // return (<React.StrictMode>
          a[i] = <CatalogCard picture = {getData()[i].picture[0]} name={getData()[i].name} price = {getData()[i].price} currencyId = {getData()[i].currencyId}/>
        //  </React.StrictMode>
      //);
}
return <React.StrictMode>{a}</React.StrictMode>;
};
  
export default Heater;