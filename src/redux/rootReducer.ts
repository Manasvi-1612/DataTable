import { combineReducers } from 'redux';
import productsReducer from "./slices/productsSlice";
import typeReducer from "./slices/typeSlice";
import rangeSlice from './slices/rangeSlice';

export const rootReducer = combineReducers({
    products: productsReducer,
    productsType: typeReducer,
    productsRange: rangeSlice
});