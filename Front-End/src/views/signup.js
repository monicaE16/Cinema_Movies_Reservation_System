import React from "react";
const Signup = () => {
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
												placeholder="Name"
											/>
										</div>

										<div className="sign__group">
											<input
												type="text"
												className="sign__input"
												placeholder="Email"
											/>
										</div>

										<div className="sign__group">
											<input
												type="password"
												className="sign__input"
												placeholder="Password"
											/>
										</div>

										<div className="sign__group sign__group--checkbox">
											<input
												id="remember"
												name="remember"
												type="checkbox"
												checked="checked"
											/>
											<label for="remember">
												I agree to the <a href="#">Privacy Policy</a>
											</label>
										</div>

										<button className="sign__btn" type="button">
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
