import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slices/productsSlice";
import typeReducer from "./slices/typeSlice";

const store = configureStore({
    reducer: {
        products: productsReducer,
        productsType: typeReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;