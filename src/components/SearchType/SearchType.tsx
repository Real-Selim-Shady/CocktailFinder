import React from "react";
import { useAppDispatch/*, useAppSelector */} from "../../utils/store/store";
import { searchByType, SearchTypeState  } from "../../utils/features/searchTypeSlice";
import { useNavigate } from "react-router-dom";

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
			<section className="cocktail-card_block">
				<button onClick={setSearchTypeToName}>Search By Name</button>
				<br/>
				<button onClick={setSearchTypeToIngredient}>Search By Ingredient</button>
				<br/>
				<button onClick={setSearchTypeToId}>Search by ID</button>
				<br/>
				<button onClick={setSearchTypeToAlcoholicNonAlcoholic}>Search by Alcoholic/Non-Alcoholic</button>
			</section>
		</>
	)
}

export default SearchType;