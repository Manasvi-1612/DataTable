import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    selectedRange: 1250
} as { selectedRange: number };


const rangeSlice = createSlice({
    name: 'range',
    initialState,
    reducers: {
        selectRange: (state, action: PayloadAction<number>) => {
            state.selectedRange = action.payload;
        },
    }
})

export const { selectRange } = rangeSlice.actions
export default rangeSlice.reducer;