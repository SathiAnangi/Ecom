import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import brandReducer from "../Actions/brandList";
import brandApi from "../middleware/brandApi";

import categoryReducer from  '../Actions/categoryList'
import categoryApi from '../middleware/categoryApi'


// import mobileReducer from  '../Actions/mobileList'
// import mobileApi from  '../middleware/mobileAPi'


// import laptopReducer from  '../Actions/laptopList'
// import laptopApi from '../middleware/laptopApi'


// import tvReducer from  '../Actions/laptopList'
// import tvApi from '../middleware/tvApi'


import  allProduct from "../Actions/allProductList";
import  ProductApi from "../middleware/allProductApi"





export const store = configureStore({
    reducer: {
        brand: brandReducer,
        category:categoryReducer,
        // mobile:mobileReducer,
        // laptop:laptopReducer,
        // tv:tvReducer,
        product:allProduct
    },
    middleware: [...getDefaultMiddleware(), brandApi, categoryApi, ProductApi ]
  })






