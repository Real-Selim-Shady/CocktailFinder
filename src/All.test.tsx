import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { useNavigate } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./utils/store/store";
import SearchType from "./components/ChoseTypeOfSearch/ChoseTypeOfSearch";
import SearchByName from "./components/SearchByName/SearchByName";
jest.mock("./utils/services/ApiCalls", () => ({
	fetchCocktailsByName: jest.fn(),
}));
import { fetchCocktailsByName } from "./utils/services/ApiCalls";
import HomeButton from "./components/HomeButton/HomeButton";

jest.mock("react-router-dom");
//jest.mock("axios") -> not needed untill I stop mocking fetch, but I should work on fixing it first

jest.useFakeTimers();

afterEach(() => {
	jest.clearAllMocks();
});

describe("Given user is clicking on a search type", ()=>{
	it("should bring user to the filter component", () => {
		const navigate = jest.fn();
		(useNavigate as jest.Mock).mockImplementation(() => navigate);
	
		const { getByText } = render(
			<Provider store={store}>
				<SearchType />
			</Provider>
		);
	
		const searchByNameButton = getByText("Search By Name");
		fireEvent.click(searchByNameButton);
		expect(navigate).toHaveBeenCalledWith("/Filter");
	
	});
})

describe("Given user is looking for a cocktail by Name and type a character in the input search bar",()=>{
	it("should call the fetch function", async () => {

		const { getByTestId } = render(
			<Provider store={store}>
				<SearchByName />
			</Provider>
		);
	
		const searchedCharacters = getByTestId("search-input");
	
		fireEvent.change(searchedCharacters, { target: { value: "Margarita" } });
	
		jest.runAllTimers();
	
		await waitFor(() => {
			expect(fetchCocktailsByName).toHaveBeenCalledWith("Margarita", expect.any(Function));
		});
	
	})
})

describe("Given user is clicking on home button",()=>{
	it("should bring user to '/' route", () => {
		const navigate = jest.fn();
		(useNavigate as jest.Mock).mockImplementation(() => navigate);
	
		const { getByTestId } = render(
			<Provider store={store}>
				<HomeButton />
			</Provider>
		);
	
		const homeButton = getByTestId("home-button");
		fireEvent.click(homeButton);
		expect(navigate).toHaveBeenCalledWith("/");
	
	});
})
