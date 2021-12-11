import React from "react";
const Signup= () => {
	return (
		<div>
<div class="sign section--bg" >
    <div class="overlay">
		<div class="container">
			<div class="row">
				<div class="col-12">
					<div class="sign__content">
						<form action="#" class="sign__form">
							<a href="index.html" class="sign__logo">
								<img src="img/logo.png" alt=""/>
							</a>

							<div class="sign__group">
								<input type="text" class="sign__input" placeholder="Name"/>
							</div>

							<div class="sign__group">
								<input type="text" class="sign__input" placeholder="Email"/>
							</div>

							<div class="sign__group">
								<input type="password" class="sign__input" placeholder="Password"/>
							</div>

							<div class="sign__group sign__group--checkbox">
								<input id="remember" name="remember" type="checkbox" checked="checked"/>
								<label for="remember">I agree to the <a href="#">Privacy Policy</a></label>
							</div>
							
							<button class="sign__btn" type="button">Sign up</button>

							<span class="sign__text">Already have an account? <a href='/SignIn'>Sign in!</a></span>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div></div>

		</div>
	);
};

export default Signup;