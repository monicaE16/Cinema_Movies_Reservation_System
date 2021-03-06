import React, { useEffect, useState } from "react";
import Header from "../components/header";
import MovieItem from "../components/movie_item";
import { getMovies } from "../API/movies";
const Home = ({ user }) => {
	const [movies, setMovies] = useState([]);
	useEffect(() => {
		getMovies()
			.then((res) => setMovies(res))
			.catch((e) => console.log(e));
	}, []);
	return (
		<div>
			<Header role={user.role}></Header>

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
						</div>

						<div className="col-12">
						<div className="movies">							
							{movies.map((movie) => {
									return <MovieItem key={movie.id} movie={movie} />;
								})}
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Home;
