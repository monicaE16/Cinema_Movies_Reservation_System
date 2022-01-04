import React, { useState } from "react";
import { updateMovie } from "../API/movies";
import { useLocation } from "react-router-dom";
import moment from "moment";

import Header from "../components/header";

const Updatemovie = () => {
	const location = useLocation();
	const { movie } = location.state;
	//console.log("movie in update", movie);

	const [title, setTitle] = useState(movie.title);
	const [date, setDate] = useState(movie.date);
	const [start_time, setStart_time] = useState(movie.start_time);
	const [end_time, setEnd_time] = useState(movie.end_time);
	const [room, setRoom] = useState(movie.room);
	const [price, setPrice] = useState(movie.price);
	const [poster_url, setPoster_url] = useState(movie.poster_url);
	const [trailer_url, setTrailer_url] = useState(movie.trailer_url);
	// console.log(
	// 	"inside update",
	// 	date,
	// 	moment(date, "YYYY-MM-DDThh:mm:ss A Z").format("MM/DD/YY")
	// );
	const handleClick = (e) => {
		if (
			!title ||
			!date ||
			!start_time ||
			!end_time ||
			!poster_url ||
			!trailer_url
		) {
			alert("Please Enter Valid Inputs");
		} else {
			const movie2 = {
				title: title,
				date: date,
				start_time: start_time,
				end_time: end_time,

				room: room,
				empty_seats_count: room === "A" ? 20 : 30,
				price: Number(price),
				poster_url: poster_url,
				trailer_url: trailer_url,
			};

			updateMovie(movie.id, movie2)
				.then((res) => {
					console.log(res.message);
					alert("Movie Updated Successfully");
				})
				.catch((e) => console.log(e));
		}
	};
	return (
		<div>
			<Header></Header>
			<div className="addmovie">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="upload-content">
								<form
									action="#"
									className="sign__form upload_form"
									id="movieform"
								>
									<div className="sign__logo">
										<img src="img/احجزلي.png" alt="" />
									</div>
									<div className="sign__group">
										<p className="title">Title</p>
										<input
											type="text"
											className="sign__input upload"
											placeholder=""
											id="title"
											name="movieTitle"
											value={title}
											onChange={(e) => setTitle(e.target.value)}
										/>
									</div>
									<div className="sign__group">
										<p className="title">Date</p>
										<input
											type="date"
											id="moviedate"
											className="sign__input upload"
											name="movieDate"
											value={moment(date, "YYYY-MM-DDThh:mm:ss A Z").format(
												"YYYY-MM-DD"
											)}
											onChange={(e) => setDate(e.target.value)}
										/>
									</div>
									<div className="sign__group">
										<p className="title">Start Time</p>
										<input
											type="time"
											step="1"
											className="sign__input upload"
											id="movie_start_time"
											name="appt"
											value={start_time}
											onChange={(e) => setStart_time(e.target.value)}
										/>
									</div>
									<div className="sign__group">
										<p className="title">End Time</p>
										<input
											type="time"
											step="1"
											className="sign__input upload"
											id="movie_end_time"
											name="appt"
											max={start_time}
											value={end_time}
											onChange={(e) => setEnd_time(e.target.value)}
										/>
									</div>
									<div className="sign__group">
										<p className="title">Screening Room</p>
										<select
											className="sign__input upload"
											name="rooms"
											id="screenroom"
											value={room}
											onChange={(e) => setRoom(e.target.value)}
										>
											<option style={{ color: "#000" }} value="A">
												A
											</option>
											<option style={{ color: "#000" }} value="B">
												B
											</option>
										</select>
									</div>
									<div className="sign__group">
										<p className="title"> Ticket Price</p>
										<input
											type="number"
											id="ticketprice"
											className="sign__input upload"
											name="price"
											min="40"
											max="100"
											value={price}
											onChange={(e) => setPrice(e.target.value)}
										/>
									</div>
									<div className="sign__group">
										<p className="title">Image Url</p>
										<input
											type="text"
											className="sign__input upload"
											placeholder=""
											id="imgUrl"
											name="movieImgUrl"
											value={poster_url}
											onChange={(e) => setPoster_url(e.target.value)}
										/>
									</div>
									<div className="sign__group">
										<p className="title">Trailer Url</p>
										<input
											type="text"
											className="sign__input upload"
											placeholder=""
											id="trailerUrl"
											name="movieTrailerUrl"
											value={trailer_url}
											onChange={(e) => setTrailer_url(e.target.value)}
										/>
									</div>
									<button
										className="sign__btn"
										type="button"
										name="submit"
										onClick={(e) => {
											handleClick(e);
										}}
									>
										Update Movie
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Updatemovie;
