/* eslint-disable react/react-in-jsx-scope */
// import { useState } from 'react'  
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import Home from "./Home";
import Basket from "./Basket";
import { useDispatch } from "react-redux";
import { setProducts } from "./store/slices/products";


function App() {
  const dispatch = useDispatch();

  async function addProductsToStore(){
    const myProducts = await axios.get("http://localhost:3000/products").then(rsp => rsp.data);

    dispatch(setProducts(myProducts));
  }

  useEffect(()=>{
    addProductsToStore();
  },[]);

  return (
    <div className="content">
      <Header />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/basket' element={<Basket />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
