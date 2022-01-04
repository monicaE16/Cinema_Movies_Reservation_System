import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
	const navigate = useNavigate();
	const role = window.localStorage.getItem("role");
	const handleLogOut = (e) => {
		window.localStorage.clear();
		navigate("/home");
	};
	const handleSignIn = (e) => {
		navigate("/SignIn");
	};
	return (
		<div>
			<header className="header">
				<div className="header__wrap">
					<div className="container">
						<div className="row">
							<div className="col-12">
								<div className="header__content">
									<a href="/home" className="header__logo">
										<img src="img/logo.png" alt="" height="100%" />
									</a>

									<ul className="header__nav">
										<li className="header__nav-item">
											<a href="/home" className="header__nav-link">
												Home
											</a>
										</li>
										{role === "user" && (
											<li className="header__nav-item">
												<a href="/Reservation" className="header__nav-link">
													Reservations
												</a>
											</li>
										)}

										{role === "manager" && (
											<li className="header__nav-item">
												<a href="/Add" className="header__nav-link">
													Add Movie
												</a>
											</li>
										)}
									</ul>

									<div className="header__auth">
										{role !== null && (
											<button
												className="header__sign-in"
												type="button"
												onClick={(e) => {
													handleLogOut(e);
												}}
											>
												Logout
											</button>
										)}
										{role === null && (
											<button
												className="header__sign-in"
												type="button"
												onClick={(e) => {
													handleSignIn(e);
												}}
											>
												SignIn
											</button>
										)}
										{/* <a href="/SignIn" className="header__sign-in">
											<i className="icon ion-ios-log-in"></i>
											<span>sign in</span>
										</a> */}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
		</div>
	);
}

export default Header;
