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
import Error from "./views/error";
function App() {
	return (
		<Router>
			{/* All the routes of the application is defined below */}

			<div className="App">
				<Routes>
					<Route exact path="/Home" element={<Home />} />

					<Route exact path="/SignIn" element={<Signin />} />

					<Route exact path="/SignUp" element={<Signup />} />

					<Route exact path="/Movie" element={<Movie />} />

					<Route exact path="/Add" element={<Addmovie />} />

					<Route exact path="*" element={<Error />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
