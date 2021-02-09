import React from "react";

const SearchInput = ({ getData }) => {
	return (
		<div className="flexContainer">
			<input type="text" onChange={(e) => getData(e.target.value)} />
			<h3>title you are looking for</h3>
		</div>
	);
};

export default SearchInput;
