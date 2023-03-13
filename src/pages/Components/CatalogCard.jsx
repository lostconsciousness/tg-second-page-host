import React from 'react';
import "./Card.css";
 function CatalogCard({picture, name, price, currencyId}) {
//function CatalogCard({img, name}) {
  return ( <div className='menu'>
  <div className='img_container'>
      <img src ={picture} className='img_menu' alt=""/>
    </div>

  <div className='menutext'>{name}</div>
  <button>{price} {currencyId}</button>
</div>)
}

export default CatalogCard;