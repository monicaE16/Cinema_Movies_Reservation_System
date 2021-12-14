import {
	BrowserRouter as Router,
	Routes,
	Route,
	Redirect,
} from "react-router-dom";

import "./App.css";
import Home from "./views/home";
import Signin from "./views/signin";
import Signup from "./views/signup";
import Movie from "./views/movie";
function App() {
	return (
		<Router>
			{/* All the routes of the application is defined below */}

			<div className="App">
				<Routes>
					<Route exact path="/" element={<Home />} />
				</Routes>
				<Routes>
					<Route exact path="/SignIn" element={<Signin />} />
				</Routes>
				<Routes>
					<Route exact path="/SignUp" element={<Signup />} />
				</Routes>
				<Routes>
					<Route exact path="/movie" element={<Movie />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
