import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import Home from "./views/home";
import Signin from "./views/signin";
import Signup from "./views/signup";
import Movie from "./views/movie";
import Addmovie from "./views/addmovie";
import Error from "./views/error";
import Payment from "./views/payment";
import Reservation from "./views/reservations";
function App() {
	const [user, setUser] = useState("guest");
	useEffect(() => {
		const loggedInUser = localStorage.getItem("role");
		//localStorage.clear();
		if (loggedInUser !== null) {
			console.log("in app ", loggedInUser);
			setUser(loggedInUser);
		}
	}, []);
	return (
		<Router>
			{/* All the routes of the application is defined below */}

			<div className="App">
				<Routes>
					<Route exact path="/Home" element={<Home user={user} />} />

					<Route exact path="/SignIn" element={<Signin setUser={setUser} />} />

					<Route exact path="/SignUp" element={<Signup user={user} />} />

					<Route exact path="/Movie" element={<Movie user={user} />} />

					<Route exact path="/Add" element={<Addmovie user={user} />} />
					<Route exact path="/Payment" element={<Payment user={user} />} />
					<Route
						exact
						path="/Reservation"
						element={<Reservation user={user} />}
					/>

					<Route exact path="*" element={<Error />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
