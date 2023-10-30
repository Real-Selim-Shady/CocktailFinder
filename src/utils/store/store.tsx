import { configureStore } from "@reduxjs/toolkit";
import { DrinkSlice } from "../features/drinkSlice";
import { SearchSlice } from "../features/searchSlice";
import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { SearchTypeSlice } from "../features/searchTypeSlice";


export const store=configureStore({
	reducer:{
		drink: DrinkSlice.reducer,
		search: SearchSlice.reducer,
		searchType: SearchTypeSlice.reducer
	}
})

export const useAppDispatch:()=> typeof store.dispatch=useDispatch;
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>>=useSelector;


/*
import { Drink } from "../features/drinkSlice";
import { searchState } from "../features/searchSlice";
import { SearchTypeState } from "../features/searchTypeSlice";


export interface RootState {
  drink: Drink;
  search: searchState;
  searchType: SearchTypeState;
}*/