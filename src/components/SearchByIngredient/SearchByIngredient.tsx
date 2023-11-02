import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../utils/store/store";
import { resetDrinks } from "../../utils/features/drinkSlice";
import { searchCharacters } from "../../utils/features/searchSlice";
import { useNavigate } from "react-router-dom";
import { fetchCocktailsByIngredient } from "../../utils/services/ApiCalls";

const SearchByIngredient = ()=>{
	const dispatch=useAppDispatch(); 
	const searchInput = useAppSelector(state => state.search.searchInput)
	const searchType = useAppSelector(state => state.searchType.searchType)
	const navigate = useNavigate();

	useEffect(()=>{
		if(searchType == ""){
			navigate("/");
		}
		dispatch(resetDrinks())
	},[])

	const handleSearchInputChangeIngredient = (e: React.ChangeEvent<HTMLInputElement>)=>{
		const searchTerm = e.target.value;
		dispatch(searchCharacters({searchInput: searchTerm}))
		setTimeout(() => {
			fetchCocktailsByIngredient(searchTerm, dispatch);
		}, 500);
	}

	return (
		<>
			{searchType == "Ingredient" && <div className="search-block">
				<label htmlFor="search-by-ingredient">Alright, let's search by Ingredient, you need the full name of it</label>
				<input id="search-by-ingredient" onChange={handleSearchInputChangeIngredient} value={searchInput} />
			</div>}
		</>
	)
}

export default SearchByIngredient;
