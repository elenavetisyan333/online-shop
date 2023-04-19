/* eslint-disable react/prop-types */
import React from "react";


function BasketCard({product}) {
  return (
    <div className="basketCard">
        <img src={product.image} alt="product image" height={200}/>
        <div className="infoInTheBasket">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
        </div>
    </div>
  );
}

export default BasketCard;