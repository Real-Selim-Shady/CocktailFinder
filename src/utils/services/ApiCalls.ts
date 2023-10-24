import axios from "axios";
import { addDrink, resetDrinks } from "../../utils/features/drinkSlice";
import { useAppDispatch } from "../store/store";

export const SearchTheCocktailsByName = (searchInput: string) => {
	const dispatch = useAppDispatch();
  
	
	axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchInput}`)
		.then(response => {
			console.log("response.data", response.data.drinks);
			dispatch(resetDrinks());
			if (response.data.drinks !== null) {
				dispatch(addDrink(response.data.drinks));
				if (searchInput === "") {
					dispatch(resetDrinks());
				}
			}
		})
		.catch(error => {
			console.error(error);
			console.log("searchInput", searchInput);
		});

};