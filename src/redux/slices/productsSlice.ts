import { PayloadAction, createSlice, nanoid } from "@reduxjs/toolkit";

interface Product {
    id: string;
    name: string;
    price: number;
    type: string;
    stock: number;
    soldUnits: number;
}

const initialState = {
    data: [{
        id: "1",
        name: "Product 1",
        price: 100,
        type: "type1",
        stock: 10,
        soldUnits: 0
    }]
} as { data: Product[] };

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<Product>) => { // Add type annotation for state
            const newProduct = action.payload; // Add type annotation for newProduct
            state.data.push({ ...newProduct, id: nanoid() });
        },
    },
});


export const { addProduct } = productsSlice.actions

export default productsSlice.reducer;
