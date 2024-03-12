import { createSlice } from "@reduxjs/toolkit";

const CategorySlice = createSlice({
    name: 'category',
    initialState : {
        category : 'All',
    },
    reducers : {
        filterMenu : (state, action) =>{
            state.category = action.payload;
        },
    },
});

export const {filterMenu} = CategorySlice.actions;
export default CategorySlice.reducer;