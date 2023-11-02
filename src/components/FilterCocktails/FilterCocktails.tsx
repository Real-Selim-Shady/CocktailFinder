import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../utils/store/store";
import { resetDrinks } from "../../utils/features/drinkSlice";
import CocktailCard from "../CocktailCard/CocktailCard";
import { useNavigate } from "react-router-dom";
import "./FilterCocktails.css";
import SearchById from "../SearchById/SearchById";
import SearchByIngredient from "../SearchByIngredient/SearchByIngredient";
import SearchByName from "../SearchByName/SearchByName";
import SearchWithorWithoutAlcohol from "../SearchWithOrWithoutAlcohol/SearchWithOrWithoutAlcohol";

const FilterCocktails = ()=>{
	const dispatch=useAppDispatch(); 
	const drinkList = useAppSelector(state => state.drink.drinks)
	const searchType = useAppSelector(state => state.searchType.searchType)
	const navigate = useNavigate();

	useEffect(()=>{
		if(searchType == ""){
			navigate("/");
		}
		dispatch(resetDrinks())
	},[])

	return (
		<>
			<section className="cocktail-card-block">
				<SearchByName />
				<SearchByIngredient />
				<SearchById />
				<SearchWithorWithoutAlcohol />
				{drinkList.length === 0 &&<span className="search-text">The result will be displayed under this text if any cocktail is found</span>}
				{drinkList.length > 0 &&<span className="search-text">Here is a list of cocktail(s) corresponding your research:</span>}
				<section className="cocktails-list">
					{drinkList.map((drink)=>{
						return (<CocktailCard key={drink.idDrink} drink={drink} />)
					})}
				</section>
			</section>
		</>
	)
}

export default FilterCocktails;
