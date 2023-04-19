import {createSlice} from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name: "products",
    initialState:{
        products: []
    },
    reducers:{
        setProducts(state, {payload}){
            state.products = payload;
        },
        changeCountOfProduct(state, {payload}){
            state.products = state.products.map(prod =>{
                return prod.id != payload.id ? prod : (
                    {
                        ...prod,
                        count: payload.newCount,
                        itemsInTheBasket: payload.items
                    }
                );
            });
        }
    }
});

export const { setProducts, changeCountOfProduct } = productsSlice.actions;

export default productsSlice.reducer;