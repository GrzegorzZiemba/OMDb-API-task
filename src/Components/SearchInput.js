import React, { useState } from "react";

const SearchInput = ({ getData }) => {
	// const [value, setValue] = useState("");
	return (
		<div>
			<input type="text" onChange={(e) => getData(e.target.value)} />
			title
		</div>
	);
};

export default SearchInput;
