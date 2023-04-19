import React from "react";
import { useSelector } from "react-redux";
import Cart from "./Cart";

function Home() {
  const products = useSelector(store => store.products.products);
  
  return (
    <div className="home">
        <div className="products">
            {
                products.map(prod =>{
                    return <Cart product={prod} key={prod.id}/>;
                })
            }
        </div>
    </div>
  );
}

export default Home;