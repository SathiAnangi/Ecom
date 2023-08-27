import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../middleware/api";

const brand = createSlice({
    name: "brands",
    initialState: {
        list : [],
        loading: false,
    },

    reducers: {
        brandsRequested: (brands, action) => {
            brands.loading = true;
        },

        brandsReceived: (brands, action) => {
            brands.list = action.payload;
            brands.loading = false;
            // console.log(brands.list," List of Brands");
        },

        brandsRequestFailed: (brands, action) => {
            brands.loading = false;
        },
    },
});

export default brand.reducer;

const { brandsRequested, brandsReceived, brandsRequestFailed } = brand.actions;

console.log();

export const Brands = () => (dispatch) => {
    return dispatch(
        apiCallBegan({
            onStart: brandsRequested.type,
            onSuccess: brandsReceived.type,
            onError: brandsRequestFailed.type,
        })
    );
};