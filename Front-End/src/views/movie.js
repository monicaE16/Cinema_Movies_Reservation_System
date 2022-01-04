import React from "react";
import ReactPlayer from "react-player/youtube";

import Header from "../components/header";
import Room from "../components/room";

import { useLocation } from "react-router-dom";

const Movie = () => {
	const location = useLocation();
	const { movie } = location.state;

	const {
		id,
		title,
		poster_url,
		start_time,
		end_time,
		price,
		date,
		trailer_url,
		room,
	} = movie;

	return (
		<div>
			<Header></Header>

			<section className="section details">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<h1 className="details__title tcolor">{title}</h1>
						</div>
						{/* <!-- end title --> */}

						{/* <!-- content --> */}
						<div className="col-12 col-xl-6">
							<div className="card card--details">
								<div className="row">
									<div className="col-12 col-sm-4 col-md-4 col-lg-3 col-xl-5">
										<div className="card__cover">
											<img src={poster_url} alt="" />
										</div>
									</div>

									<div className="col-12 col-sm-8 col-md-8 col-lg-9 col-xl-7">
										<div className="card__content">
											<ul className="card__meta">
												<li>
												<i className="fas fa-ticket-alt detail" style={{fontSize:20}}></i>
													<span className="detail">Price:</span> {price}
												</li>
												<li>
												<i className="fas fa-calendar-week detail" style={{fontSize:20}}></i>
													<span className="detail" >Date:</span> {date}
												</li>
												<li>
												<i className="fas fa-clock detail"></i>
													<span className="detail">Start:</span> {start_time}
												</li>

												<li>
												<i className="fas fa-clock detail"></i>
													<span className="detail">End:</span>
													{end_time}
												</li>
											</ul>
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
								url={trailer_url}
							/>
						</div>
					</div>
				</div>
			</section>
			<Room id={id} room={room}></Room>
		</div>
	);
};

export default Movie;
