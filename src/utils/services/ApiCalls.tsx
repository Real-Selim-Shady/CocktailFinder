/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { useDispatch } from "react-redux";
import { addDrink, resetDrinks } from "../../utils/features/drinkSlice";

export const fetchCocktailsByName = async (searchInput: string, dispatch: any) => {
	dispatch(resetDrinks());
	try {
		if (searchInput.length > 2) {
			const response = await axios.get(
				`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchInput}`
			);
			if (response.data.drinks !== null) {
				dispatch(addDrink(response.data.drinks));
			}
		}
	} catch (error) {
		console.error(error);
	}
};
 
export const fetchCocktailsById = async(searchInput: string, dispatch: any) =>{
	dispatch(resetDrinks());
	try {

		const response = await axios.get(
			`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${searchInput}`
		);
		if (response.data.drinks !== null) {
			dispatch(addDrink(response.data.drinks));
		}
		
	} catch (error) {
		console.error(error);
	}
}

export const fetchCocktailsByIngredient = async(searchInput: string, dispatch: any) =>{
	dispatch(resetDrinks());
	try {
		const response = await axios.get(
			`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${searchInput}`
		);
		if (response.data.drinks !== null) {
			dispatch(addDrink(response.data.drinks));
		}
	} catch (error) {
		console.error(error);
	}
}

export const fetchCocktailsByAlcoholic = async(dispatch: any) =>{
	dispatch(resetDrinks());
	try {
		const response = await axios.get(
			"https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic"
		);
		if (response.data.drinks !== null) {
			dispatch(addDrink(response.data.drinks));
		}
	} catch (error) {
		console.error(error);
	}
}

export const fetchCocktailsByNonAlcoholic = async(dispatch: any) =>{
	dispatch(resetDrinks());
	try {
		const response = await axios.get(
			"https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic"
		);
		if (response.data.drinks !== null) {
			dispatch(addDrink(response.data.drinks));
		}
	} catch (error) {
		console.error(error);
	}
}
