import React from "react";

function Header() {
	const edited = true;
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
											<a
												href="/home"
												className="header__nav-link"
												// role="button"
												// id="dropdownMenuHome"
												// data-toggle="dropdown"
												// aria-haspopup="true"
												// aria-expanded="false"
											>
												Home
											</a>
										</li>

										<li className="header__nav-item">
											<a href="/Reservation" className="header__nav-link">
												Reservations
											</a>
										</li>
										{edited === true && (
											<li className="header__nav-item">
												<a href="/Add" className="header__nav-link">
													Add Movie
												</a>
											</li>
										)}
									</ul>

									<div className="header__auth">
										<button className="header__search-btn" type="button">
											<i className="icon ion-ios-search"></i>
										</button>

										<a href="/SignIn" className="header__sign-in">
											<i className="icon ion-ios-log-in"></i>
											<span>sign in</span>
										</a>
									</div>

									<button className="header__btn" type="button">
										<span></span>
										<span></span>
										<span></span>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>

				<form action="#" className="header__search">
					<div className="container">
						<div className="row">
							<div className="col-12">
								<div className="header__search-content">
									<input
										type="text"
										placeholder="Search for a movie, TV Series that you are looking for"
									/>

									<button type="button">search</button>
								</div>
							</div>
						</div>
					</div>
				</form>
			</header>
		</div>
	);
}

export default Header;
