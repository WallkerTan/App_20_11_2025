import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

// State là kiểu number
const initialState: number = 1;

export const filterbgSlice = createSlice({
    name: "bg",
    initialState,
    reducers: {
        setFilter: (state, action: PayloadAction<number>) => {
            console.log("Selected bg:", action.payload);
            return action.payload; // phải return giá trị mới nếu state là primitive
        },
    },
});

// Export action
export const { setFilter } = filterbgSlice.actions;

// Export reducer
export default filterbgSlice.reducer;
