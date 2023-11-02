import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../utils/store/store";
import { resetDrinks } from "../../utils/features/drinkSlice";
import { searchCharacters } from "../../utils/features/searchSlice";
//import CocktailCard from "../CocktailCard/CocktailCard";
import { useNavigate } from "react-router-dom";
import { fetchCocktailsById } from "../../utils/services/ApiCalls";


const SearchById = ()=>{
	const dispatch=useAppDispatch(); 
	//const drinkList = useAppSelector(state => state.drink.drinks)
	const searchInput = useAppSelector(state => state.search.searchInput)
	const searchType = useAppSelector(state => state.searchType.searchType)
	const navigate = useNavigate();

	useEffect(()=>{
		if(searchType == ""){
			navigate("/");
		}
		dispatch(resetDrinks())
	},[])

	const handleSearchInputChangeId = (e: React.ChangeEvent<HTMLInputElement>)=>{
		const searchTerm = e.target.value;
		dispatch(searchCharacters({searchInput: searchTerm}))
		setTimeout(() => {
			fetchCocktailsById(searchTerm, dispatch);
		}, 500);
	}

	return (
		<>
			{searchType == "Id" && <div className="search-block">
				<label htmlFor="search-by-id">Alright, let's search by ID, you need the full ID of it</label>
				<input id="search-by-id" onChange={handleSearchInputChangeId} value={searchInput} />
			</div>}
			{/*{drinkList.length === 0 &&<span className="search-text">The result will be displayed under this text if any cocktail is found</span>}
			{drinkList.length > 0 &&<span className="search-text">Here is a list of cocktail(s) corresponding your research:</span>}
			<section className="cocktails-list">
				{drinkList.map((drink)=>{
					return (<CocktailCard key={drink.idDrink} drink={drink} />)
				})}
			</section>*/}
		</>
	)
}

export default SearchById;
