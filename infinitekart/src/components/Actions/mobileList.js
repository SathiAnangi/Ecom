import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../middleware/api";


const slice = createSlice({
    name: "cart",
    initialState: {
        data: [],
        loading: false,
    },

    reducers: {
        mobileRequested: (cart, action) => {
            cart.loading = true;
        },

        mobileReceived: (cart, action) => {
            cart.data = action.payload;
            cart.loading = false;
            // console.log(cart.data, "List of mobiles");
        },

        mobileRequestFailed: (cart, action) => {
            cart.loading = false;
        },
    },
});

export default slice.reducer;

const { cartRequested, cartReceived, cartRequestFailed } = slice.actions.id;


export const mobileData = () => (dispatch) => {
    return dispatch(
        apiCallBegan({

            onStart: cartRequested.type,
            onSuccess: cartReceived.type,
            onError: cartRequestFailed.type,
        })
    );
};