import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import FilterButton from "./components/FilterButton/FilterButton";
import SearchType from "./components/SearchType/SearchType";
import HomeButton from "./components/HomeButton/HomeButton";
import CocktailDetails from "./components/CocktailDetails/CocktailDetails";
import AnimatedBackground from "./components/AnimatedBackground/AnimatedBackground";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";



function App() {


	return (
		<Routes>
			<Route 
				path='/'
				element={
					<>
						<AnimatedBackground />
						<h1 className="app-title">Cocktail Finder</h1>
						<SearchType />
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
				path='/Cocktail/:id' //:id
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
