import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../API/login";

const Signup = ({ setUser }) => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [username, setusername] = useState("");
	const [password, setPass] = useState("");
	const [confirm_password, setConfirm_Pass] = useState("");
	const [email, setEmail] = useState("");
	const [role, setRole] = useState("");

	const [error, setError] = useState("");
	const [show_error, setShow_Error] = useState(false);
	const navigate = useNavigate();

	const handleClick = (e) => {
		e.preventDefault();
		if (confirm_password !== password) {
			setError("Passwords Don't match");
			setShow_Error(true);

			return;
		} else if (password.length < 8) {
			setError("password must be more than 8 characters");
			setShow_Error(true);
			return;
		} else if (password.search(/[a-z]/i) < 0) {
			setError("password must contain at least one letter");
			setShow_Error(true);
			return;
		} else if (password.search(/[0-9]/) < 0) {
			setError("password must contain at least one digit");
			setShow_Error(true);
			return;
		}

		register(username, firstName, lastName, email, password, role).then(
			(res) => {
				if (res === undefined) {
					///Not a correct user (wrong username or password)
					console.log("error");
					alert("Enter Valid Inputs");
				} else if (res.role === "manager") {
					//setUser(res);
					console.log("in sign in", res);
					console.log(
						"in sign in storage ",
						window.localStorage.getItem("token")
					);
					navigate("/home");
				} else if (res.role === "user") {
					//setUser(res);
					console.log("from sign in", res);
					navigate("/home");
					// <Redirect to={`/home`} replace state={{ location }} />;
				}
			}
		);
	};
	return (
		<div>
			<div className="signup section--bg">
				<div className="overlay">
					<div className="container">
						<div className="row">
							<div className="col-12">
								<div className="sign__content">
									<form action="#" className="sign__form">
										<a href="index.html" className="sign__logo">
											<img src="img/logo.png" alt="" />
										</a>
										<div className="sign__group">
											<input
												type="text"
												className="sign__input"
												placeholder="Username"
												value={username}
												onChange={(e) => setusername(e.target.value)}
											/>
										</div>
										<div className="sign__group">
											<input
												type="text"
												className="sign__input"
												placeholder="First Name"
												value={firstName}
												onChange={(e) => setFirstName(e.target.value)}
											/>
										</div>
										<div className="sign__group">
											<input
												type="text"
												className="sign__input"
												placeholder="Last Name"
												value={lastName}
												onChange={(e) => setLastName(e.target.value)}
											/>
										</div>
										<div className="sign__group">
											<input
												type="text"
												className="sign__input"
												placeholder="Email"
												value={email}
												onChange={(e) => setEmail(e.target.value)}
											/>
										</div>

										<div className="sign__group">
											<input
												type="password"
												className="sign__input"
												placeholder="Password"
												value={password}
												onChange={(e) => setPass(e.target.value)}
											/>
										</div>
										<div className="sign__group">
											<input
												type="password"
												className="sign__input"
												placeholder="Confirm_Password"
												value={confirm_password}
												onChange={(e) => setConfirm_Pass(e.target.value)}
											/>
										</div>

										{show_error && <p style={{ color: "red" }}>{error}</p>}
										<div className="sign__group selectrole">
											<select
												name="type"
												id="type"
												className="sign__input"
												onChange={(e) => setRole(e.target.value)}
											>
												<option value="">Select Role</option>
												<option value="user">User</option>
												<option value="manager">Manager</option>
											</select>
										</div>

										<button
											className="sign__btn"
											type="button"
											onClick={(e) => handleClick(e)}
										>
											Sign up
										</button>

										<span className="sign__text">
											Already have an account? <a href="/SignIn">Sign in!</a>
										</span>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Signup;
