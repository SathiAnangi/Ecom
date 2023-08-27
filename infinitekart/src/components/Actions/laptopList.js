import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../middleware/api";

const slice = createSlice({
    name: "laptop",
    initialState: {
        list: [],
        loading: false,
    },

    reducers: {
        laptopRequested: (laptop, action) => {
            laptop.loading = true;
        },

        laptopReceived: (laptop, action) => {
            laptop.list = action.payload;
            laptop.loading = false;
            console.log(laptop.list, "List of laptops");
        },

        laptopRequestFailed: (laptop, action) => {
            laptop.loading = false;
        },
    },
});

export default slice.reducer;

const { laptopRequested, laptopReceived, laptopRequestFailed } = slice.actions;






export const laptopData = () => (dispatch) => {
    return dispatch(
        apiCallBegan({
            // url,
            onStart: laptopRequested.type,
            onSuccess: laptopReceived.type,
            onError: laptopRequestFailed.type,
        })
    );
};