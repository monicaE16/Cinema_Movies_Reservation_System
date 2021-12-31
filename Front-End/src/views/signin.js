import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { login } from "../API/login";

const Signin = () => {
	const [name, setName] = useState("");
	const [pass, setPass] = useState("");
	const location = useLocation();
	const navigate = useNavigate();

	const handleClick = (e) => {
		e.preventDefault();
		login(name, pass).then((res) => {
			if (res === undefined) {
				///Not a correct user (wrong username or password)
				console.log("error");
			} else if (res.role === "manager") {
				console.log("in hereee");
				navigate("/home");
			} else if (res.role === "user") {
				console.log(res);
				// <Redirect to={`/home`} replace state={{ location }} />;
			}
		});
	};

	return (
		<div>
			<div className="sign section--bg">
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
												placeholder="User Name"
												value={name}
												onChange={(e) => setName(e.target.value)}
											/>
										</div>

										<div className="sign__group">
											<input
												type="password"
												className="sign__input"
												placeholder="Password"
												value={pass}
												onChange={(e) => setPass(e.target.value)}
											/>
										</div>

										<button
											className="sign__btn"
											type="button"
											onClick={(e) => handleClick(e)}
										>
											Sign in
										</button>

										<span className="sign__text">
											Don't have an account? <a href="/SignUp">Sign up!</a>
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

export default Signin;
