import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import FilterButton from "./components/FilterButton/FilterButton";
import SearchType from "./components/SearchType/SearchType";
import HomeButton from "./components/HomeButton/HomeButton";
import CocktailDetails from "./components/CocktailDetails/CocktailDetails";



function App() {


	return (
		<Routes>
			<Route 
				path='/'
				element={
					<>
						<h1>C'est l'heure du f..f..f..f.f.Fiiiiiiiltre de cocktail</h1>
						<SearchType />
					</>
				}
			/>
			<Route 
				path='/filter'
				element={
					<>
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
						<HomeButton />
						<p>Boulette!</p>
					</>
				}
			/>
		</Routes>

	);
}

export default App;
