/* eslint-disable react/prop-types */
import React from "react";
import { useDispatch } from "react-redux";
import { changeCountOfProduct } from "./store/slices/products";
import { setBasketProducts, deleteProductFromBasket } from "./store/slices/basketProducts";

function Cart({product}) {
    const dispatch = useDispatch();
   
    function addToBasket(){

        if(product.count > 0){
            dispatch(changeCountOfProduct({newCount: product.count - 1,
                                            id: product.id, 
                                            items: product.itemsInTheBasket + 1}));
        }
        else "";
        
        dispatch(setBasketProducts({id: product.id,
                                    items: product.itemsInTheBasket + 1,
                                    image: product.image,
                                    price: product.price,
                                    name: product.name,
                                    description: product.description
                                    }));
    }

    function removeFromBasket(){

        dispatch(changeCountOfProduct({newCount: product.count + 1, 
                                        id: product.id, 
                                        items: product.itemsInTheBasket - 1}));

        dispatch(deleteProductFromBasket({id: product.id, 
                                            items: product.itemsInTheBasket}));
    }
    
    return (
        <div className="cart">
            <img src={product.image} alt="product image" height={200}/>
            <div className="info">
                <div className="mainInfo">
                    <h2>{product.name}</h2>
                    <h2>${product.price}</h2>
                </div>
                <p>{product.description}</p>
            </div>
            <div className="forBasket">
                <button className="removeButton" onClick={removeFromBasket} disabled={!product.itemsInTheBasket > 0}>Remove From Basket</button>
                <p>{product.count}</p>
                <button className="addButton" onClick={addToBasket} disabled={!product.count > 0}>Add To Basket</button>
            </div>
        </div>
    );
}

export default Cart;

 