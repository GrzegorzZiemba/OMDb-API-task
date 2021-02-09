import logo from "./logo.svg";
import "./App.css";
import Search from "./Components/Search";
require("dotenv").config();
function App() {
	return (
		<div className="App">
			<header className="App-header">
				OMDb API search:
				<Search />
			</header>
		</div>
	);
}

export default App;
