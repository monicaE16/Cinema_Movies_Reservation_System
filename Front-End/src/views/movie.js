import React from "react";

import Header from "../components/header";

const Movie = () => {
	const title = "I dream In Another Language";
	const description =
		"	It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.";

	return (
		<div>
			<Header></Header>
			{/* <!-- title --> */}
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<div class="container">
				<div class="row">
					<div class="col-12">
						<h1 class="details__title">{title}</h1>
					</div>
					{/* <!-- end title --> */}

					{/* <!-- content --> */}
					<div class="col-12 col-xl-6">
						<div class="card card--details">
							<div class="row">
								{/* <!-- card cover --> */}
								<div class="col-12 col-sm-4 col-md-4 col-lg-3 col-xl-5">
									<div class="card__cover">
										<img src="img/covers/cover2.jpg" alt="" />
									</div>
								</div>
								{/* <!-- end card cover --> */}

								{/* <!-- card content --> */}
								<div class="col-12 col-sm-8 col-md-8 col-lg-9 col-xl-7">
									<div class="card__content">
										<div class="card__wrap">
											<span class="card__rate">
												<i class="icon ion-ios-star"></i>8.4
											</span>

											<ul class="card__list">
												<li>HD</li>
												<li>16+</li>
											</ul>
										</div>

										<ul class="card__meta">
											<li>
												<span>Genre:</span> <a href="#">Action</a>
												<a href="#">Triler</a>
											</li>

											<li>
												<span>Running time:</span> 120 min
											</li>
										</ul>

										<div class="card__description card__description--details">
											{description}
										</div>
									</div>
								</div>
								{/* <!-- end card content --> */}
							</div>
						</div>
					</div>
				</div>
				<div class="col-12 col-xl-6">
					<h2>video in here</h2>
				</div>
			</div>
		</div>
	);
};

export default Movie;
