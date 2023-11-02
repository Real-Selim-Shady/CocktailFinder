import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import FilterButton from "./components/FilterCocktails/FilterCocktails";
import ChoseTypeOfSearch from "./components/ChoseTypeOfSearch/ChoseTypeOfSearch";
import HomeButton from "./components/HomeButton/HomeButton";
import CocktailDetails from "./components/CocktailDetails/CocktailDetails";
import AnimatedBackground from "./components/AnimatedBackground/AnimatedBackground";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";



const App: React.FC = () => {


	return (
		<Routes>
			<Route 
				path='/'
				element={
					<>
						<AnimatedBackground />
						<h1 className="app-title">Cocktail Finder</h1>
						<ChoseTypeOfSearch />
					</>
				}
			/>
			<Route 
				path='/filter'
				element={
					<>
						<AnimatedBackground />
						<h1 className="app-title">Cocktail Finder</h1>
						<HomeButton />
						<FilterButton />
					</>
				}
			/>
			<Route 
				path='/Cocktail/:id'
				element={
					<>
						<AnimatedBackground />
						<h1 className="app-title">Cocktail Finder</h1>
						<HomeButton />
						<CocktailDetails />
					</>
				}
			/>
			<Route 
				path='/*'
				element={
					<>
						<AnimatedBackground />
						<h1 className="app-title">Cocktail Finder</h1>
						<HomeButton />
						<ErrorMessage />
					</>
				}
			/>
		</Routes>

	);
}

export default App;
