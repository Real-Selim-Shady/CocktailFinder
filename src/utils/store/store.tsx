import { configureStore } from "@reduxjs/toolkit";
import drink from "../features/drinkSlice";
import search from "../features/searchSlice";
import searchType from "../features/searchTypeSlice";
import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export const store=configureStore({
	reducer:{
		drink,
		search,
		searchType,
	}
})

export const useAppDispatch:()=> typeof store.dispatch=useDispatch;
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>>=useSelector;
