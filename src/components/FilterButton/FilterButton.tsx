import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../utils/store/store";
import { addDrink, resetDrinks } from "../../utils/features/drinkSlice";
import { searchCharacters } from "../../utils/features/searchSlice";
import axios from "axios";
import CocktailCard from "../CocktailCard/CocktailCard";
import { useNavigate } from "react-router-dom";
import "./FilterButton.css"

const FilterButton = ()=>{
	const dispatch=useAppDispatch(); 
	const drinkList = useAppSelector(state => state.drink.drinks)
	const searchInput = useAppSelector(state => state.search.searchInput)
	const searchType = useAppSelector(state => state.searchType.searchType)
	const navigate = useNavigate();

	useEffect(()=>{
		if(searchType == ""){
			navigate("/");
		}
		dispatch(resetDrinks())
	},[])

	const searchTheCocktailsByName = (searchInput: string)=>{
		axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchInput}`)
			.then(response => {
				//console.log("response.data",response.data.drinks);
				dispatch(resetDrinks())
				if(response.data.drinks !== null){
					dispatch(addDrink(response.data.drinks))
					if(searchInput == ""){
						dispatch(resetDrinks())
					}
				}
			})
			.catch(error => {
				console.error(error);
				console.log("searchInput",searchInput);
			});
	}

	const searchTheCocktailsById = (searchInput: string)=>{
		axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${searchInput}`)
			.then(response => {
				////console.log("response.data",response.data.drinks);
				dispatch(resetDrinks())
				if(response.data.drinks !== null){
					dispatch(addDrink(response.data.drinks))
					if(searchInput == ""){
						dispatch(resetDrinks())
					}
				}
			})
			.catch(error => {
				console.error(error);
				console.log("searchInput",searchInput);
			});
	}

	const searchTheCocktailsByIngredient = (searchInput: string)=>{
		axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${searchInput}`)
			.then(response => {
				//console.log("response.data",response.data.drinks);
				dispatch(resetDrinks())
				if(response.data.drinks !== null){
					dispatch(addDrink(response.data.drinks))
					if(searchInput == ""){
						dispatch(resetDrinks())
					}
				}
			})
			.catch(error => {
				console.error(error);
				console.log("searchInput",searchInput);
			});
	}

	const searchTheCocktailsByAlcoholic = ()=>{
		axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic")
			.then(response => {
				//console.log("response.data",response.data.drinks);
				dispatch(resetDrinks())
				if(response.data.drinks !== null){
					dispatch(addDrink(response.data.drinks))
				}
			})
			.catch(error => {
				console.error(error);
			});
	}

	const searchTheCocktailsByNonAlcoholic = ()=>{
		axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic")
			.then(response => {
				//console.log("response.data",response.data.drinks);
				dispatch(resetDrinks())
				if(response.data.drinks !== null){
					dispatch(addDrink(response.data.drinks))
				}
			})
			.catch(error => {
				console.error(error);
			});
	}

	const handleSearchInputChangeName = (e: React.ChangeEvent<HTMLInputElement>)=>{
		const searchTerm = e.target.value;
		dispatch(searchCharacters({searchInput: searchTerm}))
		searchTheCocktailsByName(searchTerm);
	}

	const handleSearchInputChangeId = (e: React.ChangeEvent<HTMLInputElement>)=>{
		const searchTerm = e.target.value;
		dispatch(searchCharacters({searchInput: searchTerm}))
		searchTheCocktailsById(searchTerm);
	}

	const handleSearchInputChangeIngredient = (e: React.ChangeEvent<HTMLInputElement>)=>{
		const searchTerm = e.target.value;
		dispatch(searchCharacters({searchInput: searchTerm}))
		searchTheCocktailsByIngredient(searchTerm);
	}
	


	return (
		<>
			<section className="cocktail-card-block">
				{searchType == "Name" && <div className="search-block">
					<label htmlFor="search-by-name">Alright, let's search by Name</label>
					<input id="search-by-name" onChange={handleSearchInputChangeName} value={searchInput} />
				</div>}
				{searchType == "Ingredient" && <div className="search-block">
					<label htmlFor="search-by-ingredient">Alright, let's search by Ingredient, you need the full name of it</label>
					<input id="search-by-ingredient" onChange={handleSearchInputChangeIngredient} value={searchInput} />
				</div>}
				{searchType == "Id" && <div className="search-block">
					<label htmlFor="search-by-id">Alright, let's search by ID, you need the full ID of it</label>
					<input id="search-by-id" onChange={handleSearchInputChangeId} value={searchInput} />
				</div>}
				{searchType == "Alcoholic_Non-Alcoholic" && <div className="search-block">
					<span >Chose with or without Alcohol</span>
					<div className="with-without-block">
						<button onClick={searchTheCocktailsByAlcoholic}>With</button>
						<button onClick={searchTheCocktailsByNonAlcoholic}>Without</button>
					</div>
				</div>}
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

export default FilterButton;
