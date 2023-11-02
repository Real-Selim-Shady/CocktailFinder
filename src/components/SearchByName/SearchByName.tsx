import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../utils/store/store";
import { resetDrinks } from "../../utils/features/drinkSlice";
import { searchCharacters } from "../../utils/features/searchSlice";
import { useNavigate } from "react-router-dom";
import { fetchCocktailsByName } from "../../utils/services/ApiCalls";

const SearchByName = ()=>{
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

	const handleSearchInputChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
		const searchTerm = e.target.value;
		dispatch(searchCharacters({ searchInput: searchTerm }));
		setTimeout(() => {
			fetchCocktailsByName(searchTerm, dispatch);
		}, 500);
	};

	return (
		<>

			{searchType == "Name" && <div className="search-block">
				<label htmlFor="search-by-name">Alright, let's search by Name</label>
				<input id="search-by-name" onChange={handleSearchInputChangeName} value={searchInput} />
			</div>}
		</>
	)
}

export default SearchByName;