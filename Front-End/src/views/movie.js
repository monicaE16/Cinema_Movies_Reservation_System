import React from "react";
import ReactPlayer from "react-player/youtube";

import Header from "../components/header";
import Room from "../components/room";

const Movie = () => {
	const title = "I dream In Another Language";
	const description =
		"	It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.";

	return (
		<div>
			<Header></Header>
			{/* <!-- title --> */}

			<section class="section details">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<h1 className="details__title">{title}</h1>
						</div>
						{/* <!-- end title --> */}

						{/* <!-- content --> */}
						<div className="col-12 col-xl-6">
							<div className="card card--details">
								<div className="row">
									{/* <!-- card cover --> */}
									<div className="col-12 col-sm-4 col-md-4 col-lg-3 col-xl-5">
										<div className="card__cover">
											<img src="img/covers/cover2.jpg" alt="" />
										</div>
									</div>
									{/* <!-- end card cover --> */}

									{/* <!-- card content --> */}
									<div className="col-12 col-sm-8 col-md-8 col-lg-9 col-xl-7">
										<div className="card__content">
											<div className="card__wrap">
												<span className="card__rate">
													<i className="icon ion-ios-star"></i>8.4
												</span>

												<ul className="card__list">
													<li>HD</li>
													<li>16+</li>
												</ul>
											</div>

											<ul className="card__meta">
												<li>
													<span>Genre:</span> <a href="#">Action</a>
													<a href="#">Triler</a>
												</li>

												<li>
													<span>Running time:</span> 120 min
												</li>
											</ul>

											<div className="card__description card__description--details">
												{description}
											</div>
										</div>
									</div>
									{/* <!-- end card content --> */}
								</div>
							</div>
						</div>
						<div className="col-12 col-xl-6 col-sm-12 ">
							<ReactPlayer
								className="player"
								width="90%"
								height="90%"
								url="https://www.youtube.com/watch?v=JfVOs4VSpmA"
							/>
						</div>
					</div>
				</div>
			</section>
			<Room></Room>
		</div>
	);
};

export default Movie;
