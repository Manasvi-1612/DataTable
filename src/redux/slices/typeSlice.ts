import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: ['type1']
} as { data: string[] };


const typeSlice = createSlice({
    name: 'type',
    initialState,
    reducers: {
        addType: (state, action) => {
            state.data.push(action.payload)
        }
    }
})

export const { addType } = typeSlice.actions
export default typeSlice.reducer;