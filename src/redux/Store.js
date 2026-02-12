import { configureStore } from "@reduxjs/toolkit";
import ReduxReducer from './ReduxSlice'
import SearchReducer from './SearchSlice'

export const Store=configureStore({
    reducer:{
        cart: ReduxReducer,
        search:SearchReducer
    }
})
