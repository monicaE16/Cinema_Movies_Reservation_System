import React from "react";

const MovieItem = ({ title, cover }) => {
	return (
		<div className="item">
			<div className="card card--big">
				<div className="card__cover">
					<img src={cover} alt="" height="100%" width="100%" />
					<a className="card__play">
						<i className="icon ion-ios-play"></i>
					</a>
				</div>
				<div className="card__content">
					<h3 className="card__title">
						<a href="movie">{title}</a>
					</h3>
				</div>
			</div>
		</div>
	);
};

export default MovieItem;
