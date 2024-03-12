import { reducer } from "@/components/ui/use-toast";
import { createSlice } from "@reduxjs/toolkit";
import { Search } from "lucide-react";

const SearchSlice = createSlice({
    name: 'search',
    initialState: {
        search: '',
    },
    reducers: {
        setSearch : (state, action) => {
            state.search = action.payload;
        }
    }
})

export const {setSearch} = SearchSlice.actions;
export default SearchSlice.reducer;