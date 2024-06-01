import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    data: ['type1'],
    selectedType: 'All'
} as { data: string[], selectedType: string, selectedRange: string };


const typeSlice = createSlice({
    name: 'type',
    initialState,
    reducers: {
        addType: (state, action) => {
            state.data.push(action.payload)
        },
        selectType: (state, action: PayloadAction<string>) => {
            state.selectedType = action.payload;
        },
    }
})

export const { addType, selectType } = typeSlice.actions
export default typeSlice.reducer;