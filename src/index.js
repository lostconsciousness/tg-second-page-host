import React from "react";
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages/home.js';
//import getData from "./pages/kostyl.js";
//import CatalogCard from "./pages/Components/CatalogCard.jsx";
import Heater from './pages/heater.js';
let i = 0;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
    <Router>
    <Routes>
        {/* <Route exact path='/' element={<Home />} /> */}
        <Route path='/' element={<Heater />} />
    </Routes>
    </Router>
    {/* "CatalogCard name="{getData()[i].name}"  " */}
  </React.StrictMode>
  
  
);


