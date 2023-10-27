import { PayloadAction, createSlice } from "@reduxjs/toolkit"



export interface SearchTypeState{
    searchType: string
}

const initialState: SearchTypeState = {
	searchType: "",
}   

export const SearchTypeSlice = createSlice({
	name: "searchType",
	initialState,
	reducers:{
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		searchByType:(state, action:PayloadAction<SearchTypeState>)=>{
			state.searchType = action.payload.searchType
		},
	}
}
);

export default SearchTypeSlice.reducer;
export const {searchByType}=SearchTypeSlice.actions;
