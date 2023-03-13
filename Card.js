const {html} = require('common-tags');

// import { html } from 'common-tags';

function Card({picture, name, price, currencyId}){
         return html`
         <div style =  "border: 1px solid black;
         width: 90%;
         text-align: center;
         padding: 10px;
         display: grid;
         justify-items: center;
         background: #272222b3;
         color: white;
         font-size: 2vh;">
            <img style = "width: 100px; height : 100px"src = ${picture}>
            <h2>${name}</h2>
            <button style = "width: 75%;height: 4vh; background: #3fbd95; border: 0px solid; color: white; font-size: 2vh;">${price} ${currencyId}</button>
        </div>
        `;
}

module.exports = Card;