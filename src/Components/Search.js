import React, { useState, useEffect } from "react";
import SearchInput from "./SearchInput";
const OMDB_API_KEY = "46c460bb";

const Search = () => {
	const [data, setData] = useState("");
	const [inputValue, setinputValue] = useState("");
	const [titleOnSubmit, setTitleOnSubmit] = useState("");

	const getDataFromInput = (inputValue) => {
		setinputValue(inputValue);
	};

	//fetching data from the server
	const getDataFromTheServer = (OMDB_API_KEY, callback) => {
		fetch(
			`http://www.omdbapi.com/?apikey=46c460bb&t=${titleOnSubmit}&plot=short`
		)
			.then((response) => response.json())
			.then((data) => callback(data))
			.catch((err) => callback(err));
	};

	//Setting data from the server to the data variable
	const dataFrom = () => {
		getDataFromTheServer(OMDB_API_KEY, (data, err) => {
			setData(data.Error ? data.Error : data);
			console.log(data);
		});
	};

	useEffect(() => {
		dataFrom();
		console.log(data);
	}, [titleOnSubmit]);

	return (
		<h1>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					setTitleOnSubmit(inputValue);
				}}
			>
				<SearchInput getData={getDataFromInput} />
				<button>Send</button>
			</form>

			<h1>{data.Title}</h1>
			<h2>{data.Year}</h2>
			<p>{data.Rated}</p>
		</h1>
	);
};

export default Search;
