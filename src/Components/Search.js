import React, { useState, useEffect } from "react";
const OMDB_API_KEY = "46c460bb";

const Search = () => {
	const [data, setData] = useState("");
	const getDataFromTheServer = (OMDB_API_KEY, callback) => {
		fetch("http://www.omdbapi.com/?apikey=46c460bb&t=Star-wars&plot=short")
			.then((response) => response.json())
			.then((data) => callback(data))
			.catch((err) => callback(err));
	};
	const dataFrom = () => {
		getDataFromTheServer(OMDB_API_KEY, (data, err) => {
			setData(data.Error ? data.Error : data.Title);
			console.log(data);
		});
	};
	useEffect(() => {
		dataFrom();
		console.log(data);
	}, []);

	return <h1>{data}</h1>;
};

export default Search;
