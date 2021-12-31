import React from "react";
import ReactPlayer from "react-player/youtube";

import Header from "../components/header";
import Room from "../components/room";

import { useLocation } from "react-router-dom";

const Movie = () => {
	const location = useLocation();
	const { title, cover } = location.state;

	const description =
		"	It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.";

	return (
		<div>
			<Header></Header>

			<section className="section details">
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
									<div className="col-12 col-sm-4 col-md-4 col-lg-3 col-xl-5">
										<div className="card__cover">
											<img src={cover} alt="" />
										</div>
									</div>

									<div className="col-12 col-sm-8 col-md-8 col-lg-9 col-xl-7">
										<div className="card__content">
											<ul className="card__meta">
												<li>
													<span>Price:</span> 120 L.E
												</li>
												<li>
													<span>Date:</span> 25 december
												</li>
												<li>
													<span>Start:</span> 22:00 pm
												</li>

												<li>
													<span>End:</span>00:00 am
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
								width="80%"
								height="80%"
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
