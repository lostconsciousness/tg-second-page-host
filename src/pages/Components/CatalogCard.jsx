import React from 'react';
import "./Card.css";
 function CatalogCard({picture, name, price, currencyId}) {
  return ( <div className='menu'>
  <div>
    <div className='img_container'>
      <img src ={picture} className='img_catalog' alt=""/>
    </div>

  <div className='menutext_catalog'>{name}</div>
  </div>
  <div className='button'>
    <button className='btn'>{price} {currencyId}</button>
  </div>
  
</div>)
}

export default CatalogCard;