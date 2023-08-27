import axios from "axios";
import * as actions from "./api";

const api =
    ({ dispatch }) =>
    (next) =>
    async (action) => {
        if (action.type !== actions.apiCallBegan.type) return next(action);

        const { url, data, onStart,onSuccess, onError } =
            action.payload;

        if (onStart) dispatch({ type: onStart });

        next(action);

        
        try {
            const response = await axios.request({
                baseURL: "http://localhost:9080/carts/add",
                url,
                data

            }); 
            console.log(response, "All Product response");
            
            dispatch(actions.apiCallSuccess(response.data));
            if (onSuccess)
                dispatch({ type: onSuccess, payload: response.data});
        } catch (error) {
            dispatch(actions.apiCallFailed(error.message));
        
            if (onError) dispatch({ type: onError, payload: error.message });
        }
    };
    
export default api;