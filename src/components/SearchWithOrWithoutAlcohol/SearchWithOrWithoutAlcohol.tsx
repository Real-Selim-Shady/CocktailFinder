import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../utils/store/store";
import { resetDrinks } from "../../utils/features/drinkSlice";
import { useNavigate } from "react-router-dom";
import { fetchCocktailsByAlcoholic } from "../../utils/services/ApiCalls";
import { fetchCocktailsByNonAlcoholic } from "../../utils/services/ApiCalls";

const SearchWithorWithoutAlcohol = ()=>{
	const dispatch=useAppDispatch(); 
	const searchType = useAppSelector(state => state.searchType.searchType)
	const navigate = useNavigate();

	useEffect(()=>{
		if(searchType == ""){
			navigate("/");
		}
		dispatch(resetDrinks())
	},[])

	const handleSearchByAlcoholic = ()=>{
		fetchCocktailsByAlcoholic(dispatch);
	}

	const handleSearchByNonAlcoholic = ()=>{
		fetchCocktailsByNonAlcoholic(dispatch);
	}

	return (
		<>

			{searchType == "Alcoholic_Non-Alcoholic" && <div className="search-block">
				<span >Chose with or without Alcohol</span>
				<div className="with-without-block">
					<button onClick={handleSearchByAlcoholic}>With</button>
					<button onClick={handleSearchByNonAlcoholic}>Without</button>
				</div>
			</div>}
		</>
	)
}

export default SearchWithorWithoutAlcohol;
