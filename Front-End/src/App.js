import {
	BrowserRouter as Router,
	Routes,
	Route,
	Redirect,
} from "react-router-dom";

import "./App.css";
import Home from "./views/home";
function App() {
	return (
		<Router>
			{/* All the routes of the application is defined below */}

			<div className="App">
				<Routes>
					<Route exact path="/" element={<Home />} />
				</Routes>
				<Routes>
					<Route exact path="/" element={<Home />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
