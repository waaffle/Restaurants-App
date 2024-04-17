import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { dishSlice } from "./entities/dish";
import { restaurantSlice } from "./entities/restaurant";
import { reviewSlice } from "./entities/review";
import { userSlice } from "./entities/user";
import { cartSlice } from "./ui/cart";
import { requestSlice } from "./ui//request/index";
import { restaurantsApi } from "./service/api";

export const store = configureStore({
    reducer: combineSlices(
        dishSlice, 
        restaurantSlice, 
        reviewSlice, 
        userSlice, 
        cartSlice, 
        requestSlice, 
        restaurantsApi),

    middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(restaurantsApi.middleware)
})