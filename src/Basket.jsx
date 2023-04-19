import React from "react";
import { useSelector } from "react-redux";
import BasketCard from "./BasketCard";

function Basket() {
  const basketProducts = useSelector(store => store.basketProducts.basketProducts);
  
  return (
    <div className="home">
        <div className="products">
            {
                basketProducts.map(prod =>{
                  console.log(prod);
                    return <BasketCard product={prod} key={prod.id}/>;
                })
            }
        </div>
    </div>
  );
}

export default Basket;