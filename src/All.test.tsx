import React from "react";
import { render, screen } from "@testing-library/react";
//import App from "./App";
import SearchType from "./components/SearchType/SearchType";
//import * as axios from "axios";

//jest.mock("axios");
//const mockedAxios = axios as jest.Mocked<typeof axios>;

test("renders learn react link", () => {
	render(<SearchType />);
	const linkElement = screen.getByText(/How will you find your cocktail?/i);
	expect(linkElement).toBeInTheDocument();
});

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