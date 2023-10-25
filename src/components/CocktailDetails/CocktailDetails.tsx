import React, {useEffect} from "react";
import { addDrink, resetDrinks } from "../../utils/features/drinkSlice";
import { useAppDispatch, useAppSelector } from "../../utils/store/store";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./CocktailDetails.css";

const CocktailDetails = ()=>{

	const dispatch=useAppDispatch(); 
	const {id} = useParams();
	const chosenCocktail = useAppSelector(state => state.drink.drinks[0])
	const navigate = useNavigate();


	useEffect(()=>{
		axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
			.then(response => {
				console.log("response.data",response.data.drinks);
				dispatch(resetDrinks())
				if(response.data.drinks !== null){
					dispatch(addDrink(response.data.drinks))
					if(id == ""){
						dispatch(resetDrinks());
						navigate("/");
					}
				}
			})
			.catch(error => {
				console.error(error);
				console.log("searchInput",id);
			});
	},[]);

	return (
		<>
			<section className="cocktail-details_block">
				<span>You chose the {chosenCocktail?.strDrink} ? Very good choice</span>
				<span>Here is your cocktail</span>
				<img alt="cocktail picture" className="cocktail-details-picture" src={chosenCocktail?.strDrinkThumb}></img>
				<section className="ingredients-block">
					<span>Here are the Ingredients:</span>
					<span>{chosenCocktail?.strIngredient1}</span>
					{
						chosenCocktail?.strIngredient2 !== null && <span>{chosenCocktail?.strIngredient2}</span>
					}
					{
						chosenCocktail?.strIngredient3 !== null && <span>{chosenCocktail?.strIngredient3}</span>
					}
					{
						chosenCocktail?.strIngredient4 !== null && <span>{chosenCocktail?.strIngredient4}</span>
					}
					{
						chosenCocktail?.strIngredient5 !== null && <span>{chosenCocktail?.strIngredient5}</span>
					}
					{
						chosenCocktail?.strIngredient6 !== null && <span>{chosenCocktail?.strIngredient6}</span>
					}
					{
						chosenCocktail?.strIngredient7 !== null && <span>{chosenCocktail?.strIngredient7}</span>
					}
					{
						chosenCocktail?.strIngredient8 !== null && <span>{chosenCocktail?.strIngredient8}</span>
					}
					{
						chosenCocktail?.strIngredient9 !== null && <span>{chosenCocktail?.strIngredient9}</span>
					}
					{
						chosenCocktail?.strIngredient10 !== null && <span>{chosenCocktail?.strIngredient10}</span>
					}
					{
						chosenCocktail?.strIngredient11 !== null && <span>{chosenCocktail?.strIngredient11}</span>
					}
					{
						chosenCocktail?.strIngredient12 !== null && <span>{chosenCocktail?.strIngredient12}</span>
					}
					{
						chosenCocktail?.strIngredient13 !== null && <span>{chosenCocktail?.strIngredient13}</span>
					}
					{
						chosenCocktail?.strIngredient14 !== null && <span>{chosenCocktail?.strIngredient14}</span>
					}
					{
						chosenCocktail?.strIngredient15 !== null && <span>{chosenCocktail?.strIngredient15}</span>
					}
				</section>
				<span>Instructions: {chosenCocktail?.strInstructions}</span>
				<span>Type of cocktail: {chosenCocktail?.strAlcoholic}</span>
				<span>Type of glass: {chosenCocktail?.strGlass}</span>
			</section>
		</>
	)
}

export default CocktailDetails;