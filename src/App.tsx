import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import FilterButton from "./components/FilterButton/FilterButton";
import SearchType from "./components/SearchType/SearchType";
import HomeButton from "./components/HomeButton/HomeButton";
import CocktailDetails from "./components/CocktailDetails/CocktailDetails";
import AnimatedBackground from "./components/AnimatedBackground/AnimatedBackground";



function App() {


	return (
		<Routes>
			<Route 
				path='/'
				element={
					<>
						<AnimatedBackground />
						<h1>Cocktail Finder</h1>
						<span className="big-text">How will you find your cocktail?</span>
						<SearchType />
					</>
				}
			/>
			<Route 
				path='/filter'
				element={
					<>
						<AnimatedBackground />
						<h1>Cocktail Finder</h1>
						<HomeButton />
						<span>et c'est parti pour filtrer, go sur l'input et go filtrer</span>
						<FilterButton />
					</>
				}
			/>
			<Route 
				path='/Cocktail/:id' //:id
				element={
					<>
						<AnimatedBackground />
						<h1>Cocktail Finder</h1>
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
						<HomeButton />
						<p>Boulette!</p>
					</>
				}
			/>
		</Routes>

	);
}

export default App;
