import {createSlice} from "@reduxjs/toolkit";

const basketProductsSlice = createSlice({
    name: "basketProducts",
    initialState:{
        basketProducts: []
    },
    reducers:{
        setBasketProducts(state, {payload}){
            const alreadyExists = Array.from(state.basketProducts).find(prod => prod.id == payload.id);
            if(alreadyExists){
                state.basketProducts = state.basketProducts.map(prod =>{
                    return prod.id != payload.id ? prod : {
                        ...prod,
                        itemsInTheBasket: payload.items
                    };
                });
            }
            else{
                state.basketProducts = [
                    ...state.basketProducts,
                    {
                        name: payload.name,
                        description: payload.description,
                        price: payload.price,
                        image: payload.image,
                        id: payload.id,
                        itemsInTheBasket: payload.items
                    }
                ];
            }
        },
        deleteProductFromBasket(state, {payload}){
            if(payload.items > 1){
                state.basketProducts = state.basketProducts.map(prod =>{
                    return prod.id != payload.id ? prod : {
                        ...prod,
                        itemsInTheBasket: payload.items
                    };
                });
            }
            else{
                state.basketProducts = state.basketProducts.filter(prod =>{
                    return prod.id != payload.id;
                });
            }
        }
    }
});

export const { setBasketProducts, deleteProductFromBasket } = basketProductsSlice.actions;

export default basketProductsSlice.reducer;