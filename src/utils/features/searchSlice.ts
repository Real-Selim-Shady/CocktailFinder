import { PayloadAction, createSlice } from "@reduxjs/toolkit"



interface searchState{
    searchInput: string
}

const initialState: searchState = {
	searchInput: "",
}   

export const SearchSlice = createSlice({
	name: "search",
	initialState,
	reducers:{
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		searchCharacters:(state, action:PayloadAction<searchState>)=>{
			state.searchInput = action.payload.searchInput
		},
	}
}
);

export default SearchSlice.reducer;
export const {searchCharacters}=SearchSlice.actions;
