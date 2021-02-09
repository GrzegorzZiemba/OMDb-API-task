import React, { useState, useEffect } from "react";
import SearchInput from "./SearchInput";
const OMDB_API_KEY = "46c460bb";

// I choose t instead of s, becouse of that plot twist possibility /shwo|hide/
// I Know that searching via 's' would give me an array of Searches and i can show them via button , iterate throught them using map or let them roll,

const Search = () => {
	const [data, setData] = useState("");
	const [inputValue, setinputValue] = useState("");
	//make titleOnSubmit variable to re-render only when submit is clicked
	const [titleOnSubmit, setTitleOnSubmit] = useState("");

	//make handlerFor plotTwist to see if user Want's to see it or not
	const [showPlotTwist, setPlotTwist] = useState(true);

	// input callback handler to handle changes on the input area
	const getDataFromInput = (inputValue) => {
		setinputValue(inputValue);
	};

	//fetching data from the server
	const getDataFromTheServer = (OMDB_API_KEY, callback) => {
		fetch(
			`http://www.omdbapi.com/?apikey=46c460bb&t=${titleOnSubmit}&plot=${
				showPlotTwist ? "full" : "short"
			}`
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
		// if (poster) {
		// 	getPoster();
		// }
	}, [titleOnSubmit, showPlotTwist]);

	return (
		<div className="mainContainer">
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
			{data.Title ? (
				<>
					<button onClick={() => setPlotTwist(!showPlotTwist)}>
						Wanna see plot twist ?
					</button>
				</>
			) : (
				""
			)}

			<p>{data.Plot}</p>
		</div>
	);
};

export default Search;
