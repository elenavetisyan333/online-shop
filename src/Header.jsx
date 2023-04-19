import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
    const basketProducts = useSelector(store => store.basketProducts.basketProducts);

    return (
        <div className="header">
            <div className="insideHeader">

                <div className="logoPart">
                    <NavLink to="/home">
                        <img src="public/logo.png" alt="logo" height="45px"/>
                    </NavLink>
                </div>

                <ul>
                    <li>
                        <NavLink to="/home" className={({isActive}) => isActive ? "active-link" : ""}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/basket" className={({isActive}) => isActive ? "active-link" : ""}>Basket</NavLink>
                    </li>
                </ul>

                <div className="basketPart">
                    <NavLink to="/basket">
                        <img src="public/basket.png" alt="basket" height="40px" />
                    </NavLink>
                    {
                        basketProducts.length > 0 ? <p>{basketProducts.length}</p> : ""
                    }
                </div>

            </div>
        </div>
  );
}

export default Header;