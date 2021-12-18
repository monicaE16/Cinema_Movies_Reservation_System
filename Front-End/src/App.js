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
import Addmovie from "./views/addmovie";
function App() {
	return (
		<Router>
			{/* All the routes of the application is defined below */}

			<div className="App">
				<Routes>
					<Route exact path="/Home" element={<Home />} />
				</Routes>
				<Routes>
					<Route exact path="/SignIn" element={<Signin />} />
				</Routes>
				<Routes>
					<Route exact path="/SignUp" element={<Signup />} />
				</Routes>
				<Routes>
					<Route exact path="/Movie" element={<Movie />} />
				</Routes>
				<Routes>
					<Route exact path="/Add" element={<Addmovie />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
