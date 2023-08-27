import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../middleware/api";

const slice = createSlice({
    name: "Tv",
    initialState: {
        list: [],
        loading: false,
    },

    reducers: {
        TvRequested: (Tv, action) => {
            Tv.loading = true;
        },

        TvReceived: (Tv, action) => {
            Tv.list = action.payload;
            Tv.loading = false;
            console.log(Tv.list, "List  of Tv");
        },

        TvRequestFailed: (Tv, action) => {
            Tv.loading = false;
        },
    },
});

export default slice.reducer;

const { TvRequested, TvReceived, TvRequestFailed } = slice.actions;

// const url = "/Tv";





export const tvData = () => (dispatch) => {
    return dispatch(
        apiCallBegan({
            // url,
            onStart: TvRequested.type,
            onSuccess: TvReceived.type,
            onError: TvRequestFailed.type,
        })
    );
};