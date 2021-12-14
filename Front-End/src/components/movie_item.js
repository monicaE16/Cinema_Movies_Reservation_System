import React from "react";

const MovieItem = ({ title, cover }) => {
	return (
		<div class="item">
			<div class="card card--big">
				<div class="card__cover">
					<img src={cover} alt="" height="100%" width="100%" />
					<a class="card__play">
						<i class="icon ion-ios-play"></i>
					</a>
				</div>
				<div class="card__content">
					<h3 class="card__title">
						<a href="movie">{title}</a>
					</h3>
				</div>
			</div>
		</div>
	);
};

export default MovieItem;
