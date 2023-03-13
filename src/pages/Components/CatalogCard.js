import React from 'react';
//function CatalogCard({ picture, name, price, currencyId }) {
function CatalogCard({  name }) {
  React.createElement(
    "div",
    //{ style: "border: 1px solid black; width: 90%; text-align: center; padding: 10px; display: grid; justify-items: center; background: #272222b3; color: white; font-size: 2vh;" },
    // React.createElement("img", { style: "width: 100px; height : 100px", src: picture, alt: "pic of offer" }),
    React.createElement(
      "h2",
      null,
      name
    )
    // ),
    // React.createElement(
    //   "button",
    //   { style: "width: 75%;height: 4vh; background: #3fbd95; border: 0px solid; color: white; font-size: 2vh;" },
    //   price,
    //   " ",
    //   currencyId,
    //   " ",
    //   picture
    // )
  );
}

export default CatalogCard;