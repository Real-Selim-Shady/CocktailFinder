import { PayloadAction, createSlice } from "@reduxjs/toolkit"

export interface Drink{
    idDrink: string,
    strDrink: string | null,
    strDrinkAlternate: string | null,
    strTags: string,
    strVideo: string | null,
    strCategory: string | null,
    strIBA: string | null,
    strAlcoholic: string,
    strGlass: string | null,
    strInstructions: string,
    strDrinkThumb: string | undefined,
    strIngredient1: string,
    strIngredient2: string | null,
    strIngredient3: string | null,
    strIngredient4: string | null,
    strIngredient5: string | null,
    strIngredient6: string | null,
    strIngredient7: string | null,
    strIngredient8: string | null,
    strIngredient9: string | null,
    strIngredient10: string | null,
    strIngredient11: string | null,
    strIngredient12: string | null,
    strIngredient13: string | null,
    strIngredient14: string | null,
	strIngredient15: string | null,
    strMeasure1: string,
    strMeasure2: string | null,
    strMeasure3: string | null,
    strMeasure4: string | null,
    strMeasure5: string | null,
    strMeasure6: string | null,
    strMeasure7: string | null,
    strMeasure8: string | null,
    strMeasure9: string | null,
    strMeasure10: string | null,
    strMeasure11: string | null,
    strMeasure12: string | null,
    strMeasure13: string | null,
    strMeasure14: string | null,
    strMeasure15: string | null,
    strImageSource: string | null,
    strImageAttribution: string | null,
    strCreativeCommonsConfirmed: string | null,
    dateModified: string | null,
}

interface DrinkState{
    drinks: Drink[]
}

const initialState: DrinkState = {
	drinks: [],
}   

export const DrinkSlice = createSlice({
	name: "drink",
	initialState,
	reducers:{
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		addDrink:(state, action:PayloadAction<Drink[]>)=>{
			state.drinks.push(...action.payload)
		},
		resetDrinks: (state) => {
			state.drinks = [];
		}
	}
}
);

export default DrinkSlice.reducer;
export const {addDrink, resetDrinks}=DrinkSlice.actions;


/*{
	idDrink: action.payload.idDrink,
	strDrink: action.payload.strDrink,
	strDrinkAlternate: action.payload.strDrinkAlternate,
	strTags: action.payload.strTags,
	strVideo: action.payload.strVideo,
	strCategory: action.payload.strCategory,
	strIBA: action.payload.strIBA,
	strAlcoholic: action.payload.strAlcoholic,
	strGlass: action.payload.strGlass,
	strInstructions: action.payload.strInstructions,
	strDrinkThumb: action.payload.strDrinkThumb,
	strIngredient1: action.payload.strIngredient1,
	strIngredient2: action.payload.strIngredient2,
	strIngredient3: action.payload.strIngredient3,
	strIngredient4: action.payload.strIngredient4,
	strIngredient5: action.payload.strIngredient5,
	strIngredient6: action.payload.strIngredient6,
	strIngredient7: action.payload.strIngredient7,
	strIngredient8: action.payload.strIngredient8,
	strIngredient9: action.payload.strIngredient9,
	strIngredient10: action.payload.strIngredient10,
	strIngredient11: action.payload.strIngredient11,
	strIngredient12: action.payload.strIngredient12,
	strIngredient13: action.payload.strIngredient13,
	strIngredient14: action.payload.strIngredient14,
	strMeasure1: action.payload.strMeasure1,
	strMeasure2: action.payload.strMeasure2,
	strMeasure3: action.payload.strMeasure3,
	strMeasure4: action.payload.strMeasure4,
	strMeasure5: action.payload.strMeasure5,
	strMeasure6: action.payload.strMeasure6,
	strMeasure7: action.payload.strMeasure7,
	strMeasure8: action.payload.strMeasure8,
	strMeasure9: action.payload.strMeasure9,
	strMeasure10: action.payload.strMeasure10,
	strMeasure11: action.payload.strMeasure11,
	strMeasure12: action.payload.strMeasure12,
	strMeasure13: action.payload.strMeasure13,
	strMeasure14: action.payload.strMeasure14,
	strMeasure15: action.payload.strMeasure15,
	strImageSource: action.payload.strImageSource,
	strImageAttribution: action.payload.strImageAttribution,
	strCreativeCommonsConfirmed: action.payload.strCreativeCommonsConfirmed,
	dateModified: action.payload.dateModified,
}*/