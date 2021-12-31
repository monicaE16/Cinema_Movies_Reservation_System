import React from "react";
import Header from "../components/header";
import MovieItem from "../components/movie_item";

const Home = () => {
	// const { state } = useLocation();
	// const { mess } = state;

	// console.log(mess);
	return (
		<div>
			<Header></Header>

			<section className="home">
				<div className="owl-carousel home__bg">
					<div
						className="item home__cover"
						data-bg="img/home/home__bg.jpg"
					></div>
					<div
						className="item home__cover"
						data-bg="img/home/home__bg2.jpg"
					></div>
					<div
						className="item home__cover"
						data-bg="img/home/home__bg3.jpg"
					></div>
					<div
						className="item home__cover"
						data-bg="img/home/home__bg4.jpg"
					></div>
				</div>
				{/* <!-- end home bg --> */}
				<div className="container">
					<div className="row">
						<div className="col-12">
							<h1 className="home__title">
								<b>حاليا بدور العرض</b>
							</h1>
							<button className="home__nav home__nav--prev" type="button">
								<i className="icon ion-ios-arrow-round-back"></i>
							</button>
							<button className="home__nav home__nav--next" type="button">
								<i className="icon ion-ios-arrow-round-forward"></i>
							</button>
						</div>

						<div className="col-12">
							<div className="owl-carousel home__carousel">
								<MovieItem title="I love U" cover="img/covers/cover.jpg" />
								<MovieItem title="I love U" cover="img/covers/cover2.jpg" />
								<MovieItem title="I love U" cover="img/covers/cover3.jpg" />
								<MovieItem title="I love U" cover="img/covers/cover4.jpg" />
								<MovieItem title="I love U" cover="img/covers/cover5.jpg" />
								<MovieItem title="I love U" cover="img/covers/cover6.jpg" />
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Home;
