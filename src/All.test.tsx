import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { useNavigate } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./utils/store/store";
import SearchType from "./components/SearchType/SearchType";

jest.mock("react-router-dom");

test("renders learn react link", () => {
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






/*
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SearchType from "./components/SearchType/SearchType";

//pour tester des routes
import { useNavigate } from "react-router-dom";

//pour tester redux toolkit
import { Provider } from "react-redux";
import { store } from "./utils/store/store";

/*jest.mock("react-router-dom", () => {
	const originalModule = jest.requireActual("react-router-dom");

	return {
		...originalModule,
		useNavigate: jest.fn(),
	};
});

test("renders learn react link", () => {
	//pour router
	const navigate = jest.fn();
	useNavigate.mockImplementation(() => navigate);

	const { getByText } = render(
		<Provider store={store}>
			<SearchType />
		</Provider>
	);

	const searchByNameButton = getByText("Search By Name");
	fireEvent.click(searchByNameButton);
	expect(navigate).toHaveBeenCalledWith("/Filter")
});
*/
/*import React from "react";
import { render, screen } from "@testing-library/react";
import SearchType from "./components/SearchType/SearchType";*/
//import App from "./App";
//import * as axios from "axios";
//jest.mock("axios");
//const mockedAxios = axios as jest.Mocked<typeof axios>;


/*render(<SearchType />);
const linkElement = screen.getByText(/How will you find your cocktail?/i);
expect(linkElement).toBeInTheDocument();*/


/*
test("good response", () => {
  axios.get.mockImplementation(() => Promise.resolve({ data: {...} }));
  // ...
});

test("bad response", () => {
  axios.get.mockImplementation(() => Promise.reject({ ... }));
  // ...
});
It is possible to specify the response code:

axios.get.mockImplementation(() => Promise.resolve({ status: 200, data: {...} }));
It is possible to change the mock based on the parameters:

axios.get.mockImplementation((url) => {
    if (url === 'www.example.com') {
        return Promise.resolve({ data: {...} });
    } else {
        //...
    }
});
*/