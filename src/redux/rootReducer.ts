import { combineReducers } from 'redux';
import productsReducer from "./slices/productsSlice";
import typeReducer from "./slices/typeSlice";

export const rootReducer = combineReducers({
    products: productsReducer,
    productsType: typeReducer
});