import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./slices/products";
import basketProductsSlice from "./slices/basketProducts";

const store = configureStore({
    reducer: {
        products: productsSlice,
        basketProducts: basketProductsSlice,
    }
});

export default store;