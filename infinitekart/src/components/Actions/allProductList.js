import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../middleware/api";

const Product = createSlice({
    name: "allProduct",
    initialState: {
        data: [],
        loading: false,
    },

    reducers: {
        allProductRequested: (allProduct, action) => {
            allProduct.loading = true;
        },

        allProductReceived: (allProduct, action) => {
            allProduct.data = action.payload;
            allProduct.loading = false;

            console.log(allProduct.data , "All Products");
        },

        allProductRequestFailed: (allProduct, action) => {
            allProduct.loading = false;
        },
    },
});

export default Product.reducer;

const { allProductRequested, allProductReceived, allProductRequestFailed } = Product.actions;


export const allProduct = () => (dispatch) => {
    return dispatch(
        apiCallBegan({
        
            onStart: allProductRequested.type,
            onSuccess: allProductReceived.type,
            onError: allProductRequestFailed.type,
        })
    );
};