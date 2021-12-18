import React from "react";

function Header() {
	return (
		<div>
			<header class="header">
				<div class="header__wrap">
					<div class="container">
						<div class="row">
							<div class="col-12">
								<div class="header__content">
									<a href="/" class="header__logo">
										<img src="img/logo.png" alt="" height="100%" />
									</a>

									<ul class="header__nav">
										<li class="header__nav-item">
											<a
												class="dropdown-toggle header__nav-link"
												href="/"
												role="button"
												id="dropdownMenuHome"
												data-toggle="dropdown"
												aria-haspopup="true"
												aria-expanded="false"
											>
												Home
											</a>
										</li>

										<li class="header__nav-item">
											<a href="faq.html" class="header__nav-link">
												About
											</a>
										</li>
										<li class="header__nav-item">
											<a href="/Add" class="header__nav-link">
												Add Movie
											</a>
										</li>
									</ul>

									<div class="header__auth">
										<button class="header__search-btn" type="button">
											<i class="icon ion-ios-search"></i>
										</button>

										<a href="/SignIn" class="header__sign-in">
											<i class="icon ion-ios-log-in"></i>
											<span>sign in</span>
										</a>
									</div>

									<button class="header__btn" type="button">
										<span></span>
										<span></span>
										<span></span>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>

				<form action="#" class="header__search">
					<div class="container">
						<div class="row">
							<div class="col-12">
								<div class="header__search-content">
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
