/* eslint-disable react/prop-types */
import React from "react";


function BasketCard({product}) {
  return (
    <div className="cart">
      <div style={{height: "300px",
                  backgroundImage: `url(${product.image})`,
                  backgroundSize: "100% 300px",
                  backgroundPosition: "center"
      }}/>

      <div className="info">
          <div className="mainInfo">
              <h2 className="name">{product.name}</h2>
              <h2 className="price">${product.price}</h2>
          </div>
          <p>{product.description}</p>
      </div>
  </div>
  );
}

export default BasketCard;