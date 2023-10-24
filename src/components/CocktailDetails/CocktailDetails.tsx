import React, {useEffect} from "react";
import { addDrink, resetDrinks } from "../../utils/features/drinkSlice";
import { useAppDispatch, useAppSelector } from "../../utils/store/store";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

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
				<p>You chose the {chosenCocktail?.strDrink} ? Very good choice</p>
				<br/>
				<p>Here is your cocktail</p>
				<br/>
				<img alt="cocktail-picture" src={chosenCocktail?.strDrinkThumb}></img>
				<br/>
				<ul>Here are the Ingredients:
					<li>{chosenCocktail?.strIngredient1}</li>
					{
						chosenCocktail?.strIngredient2 !== null && <li>{chosenCocktail?.strIngredient2}</li>
					}
					{
						chosenCocktail?.strIngredient3 !== null && <li>{chosenCocktail?.strIngredient3}</li>
					}
					{
						chosenCocktail?.strIngredient4 !== null && <li>{chosenCocktail?.strIngredient4}</li>
					}
					{
						chosenCocktail?.strIngredient5 !== null && <li>{chosenCocktail?.strIngredient5}</li>
					}
					{
						chosenCocktail?.strIngredient6 !== null && <li>{chosenCocktail?.strIngredient6}</li>
					}
					{
						chosenCocktail?.strIngredient7 !== null && <li>{chosenCocktail?.strIngredient7}</li>
					}
					{
						chosenCocktail?.strIngredient8 !== null && <li>{chosenCocktail?.strIngredient8}</li>
					}
					{
						chosenCocktail?.strIngredient9 !== null && <li>{chosenCocktail?.strIngredient9}</li>
					}
					{
						chosenCocktail?.strIngredient10 !== null && <li>{chosenCocktail?.strIngredient10}</li>
					}
					{
						chosenCocktail?.strIngredient11 !== null && <li>{chosenCocktail?.strIngredient11}</li>
					}
					{
						chosenCocktail?.strIngredient12 !== null && <li>{chosenCocktail?.strIngredient12}</li>
					}
					{
						chosenCocktail?.strIngredient13 !== null && <li>{chosenCocktail?.strIngredient13}</li>
					}
					{
						chosenCocktail?.strIngredient14 !== null && <li>{chosenCocktail?.strIngredient14}</li>
					}
					{
						chosenCocktail?.strIngredient15 !== null && <li>{chosenCocktail?.strIngredient15}</li>
					}
				</ul>
				<span>Instructions: {chosenCocktail?.strInstructions}</span>
				<br/>
				<span>Type of cocktail: {chosenCocktail?.strAlcoholic}</span>
				<br/>
				<span>Type of glass: {chosenCocktail?.strGlass}</span>
			</section>
		</>
	)
}

export default CocktailDetails;