import { createSlice } from "@reduxjs/toolkit";
import { apiCallCategoryBegan } from "../middleware/api";

const categories = createSlice({
    name: "category",
    initialState: {
        data: [],
        loading: false,
    },
    reducers: {
        categoryRequested: (category, action) => {
            category.loading = true;
        },

        categoryReceived: (category, action) => {
            category.data = action.payload;
            category.loading = false;
            // console.log(category.data,"List of  Categories");
        },

        categoryRequestFailed: (category, action) => {
            category.loading = false;
        },
    },
});

export default categories.reducer;

const { categoryRequested, categoryReceived, categoryRequestFailed } = categories.actions;


export const  categoryList= () => (dispatch) => {
    return dispatch(
        apiCallCategoryBegan({
            onStart: categoryRequested.type,
            onSuccess: categoryReceived.type,
            onError: categoryRequestFailed.type,
        })
    );
};