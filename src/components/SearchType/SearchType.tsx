import React from "react";
import { useAppDispatch/*, useAppSelector */} from "../../utils/store/store";
import { searchByType, SearchTypeState  } from "../../utils/features/searchTypeSlice";
import { useNavigate } from "react-router-dom";
import "./SearchType.css"

const SearchType = ()=>{

	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const setSearchTypeToName = ()=>{
		const searchType: SearchTypeState = {
			searchType: "Name"
		};
		dispatch(searchByType(searchType))
		navigate("/Filter")
	}

	const setSearchTypeToIngredient = ()=>{
		const searchType: SearchTypeState = {
			searchType: "Ingredient"
		};
		dispatch(searchByType(searchType))
		navigate("/Filter")
	}

	const setSearchTypeToId = ()=>{
		const searchType: SearchTypeState = {
			searchType: "Id"
		};
		dispatch(searchByType(searchType))
		navigate("/Filter")
	}

	const setSearchTypeToAlcoholicNonAlcoholic = ()=>{
		const searchType: SearchTypeState = {
			searchType: "Alcoholic_Non-Alcoholic"
		};
		dispatch(searchByType(searchType))
		navigate("/Filter")
	}


	return (
		<>
			<section className="search-type-block">
				<span className="big-text">How will you find your cocktail?</span>
				<button className="search-choice-button" onClick={setSearchTypeToName}>Search By Name</button>
				<button className="search-choice-button" onClick={setSearchTypeToIngredient}>Search By Ingredient</button>
				<button className="search-choice-button" onClick={setSearchTypeToId}>Search by ID</button>
				<button className="search-choice-button" onClick={setSearchTypeToAlcoholicNonAlcoholic}>Search by Alcoholic/Non-Alcoholic</button>
			</section>
		</>
	)
}

export default SearchType;