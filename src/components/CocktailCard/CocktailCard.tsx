import React,{/*useRef,*/ } from "react";
import { Drink } from "../../utils/features/drinkSlice";
import { useNavigate } from "react-router-dom";
import "./CocktailCard.css"

interface CocktailCardProps {
	drink: Drink;
}

const CocktailCard: React.FC<CocktailCardProps> = ({ drink })=>{

	const navigate = useNavigate();

	const drinkId = drink.idDrink

	const goToCocktailDetails = (drinkId: string)=>{
		navigate(`/Cocktail/${drinkId}`)
	}


	return (
		<>
			<div className="cocktail-card" onClick={()=>goToCocktailDetails(drinkId)}>
				<img alt="cocktail picture" className="cocktail-picture" src={drink.strDrinkThumb}></img>
				<div className="card-text">
					<span className="cocktail-title">{drink.strDrink}</span>
					<span className="cocktail-type">{drink.strAlcoholic}</span>
				</div>
			</div>
		</>
	)
}

export default CocktailCard;





/*const handleAddDrink = () => {
		const newDrink: Drink = {
			idDrink: idDrink.current,
			strDrink: "",
			strDrinkAlternate: "",
			strTags: "",
			strVideo: "",
			strCategory: "",
			strIBA: "",
			strAlcoholic: "",
			strGlass: "",
			strInstructions: "",
			strDrinkThumb: "",
			strIngredient1: "",
			strIngredient2: "",
			strIngredient3: "",
			strIngredient4: "",
			strIngredient5: "",
			strIngredient6: "",
			strIngredient7: "",
			strIngredient8: "",
			strIngredient9: "",
			strIngredient10: "",
			strIngredient11: "",
			strIngredient12: "",
			strIngredient13: "",
			strIngredient14: "",
			strMeasure1: "",
			strMeasure2: "",
			strMeasure3: "",
			strMeasure4: "",
			strMeasure5: "",
			strMeasure6: "",
			strMeasure7: "",
			strMeasure8: "",
			strMeasure9: "",
			strMeasure10: "",
			strMeasure11: "",
			strMeasure12: "",
			strMeasure13: "",
			strMeasure14: "",
			strMeasure15: "",
			strImageSource: "",
			strImageAttribution: "",
			strCreativeCommonsConfirmed: "",
			dateModified: "",
		};
		dispatch(addDrink(newDrink));
		console.log("res",res)
	};*/


/*
					<p>la petite liste de cocktails qui va bien</p>
					{drinkList.map((drink)=>{
						return (<li key={`${drink.idDrink}`}>{drink.strDrink}</li>)
					})}
	*/