import {
	BrowserRouter as Router,
	Routes,
	Route,
	Redirect,
} from "react-router-dom";

import "./App.css";
import "./views/sign-in";
import SignIn from "./views/sign-in";

function App() {
	return (
		<Router>
			{/* All the routes of the application is defined below */}

			<div className="App">
				<Routes>
					<Route exact path="/" element={<SignIn />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
