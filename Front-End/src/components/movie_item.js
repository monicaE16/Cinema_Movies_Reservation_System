import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { updateMovie } from "../API/movies";

const MovieItem = ({ movie }) => {
	const [modalShow, setModalShow] = useState(false);

	const { title, poster_url } = movie;
	//console.log("movie in movie item", movie);

	return (
		<div className="item">
			<div className="card card--big">
				<Link to={"/movie"} state={{ movie }}>
					<div className="card__cover">
						<img src={poster_url} alt="" />
					</div>
				</Link>
				<div className="card__content">
					<h3 className="card__title">
						<Link to={"/movie"} state={{ movie }}>
							<h3>{title}</h3>
						</Link>
						{window.localStorage.getItem("role") === "manager" && (
							<Link to={"/update"} state={{ movie }}>
								<i
									className="fa fa-pen edit-icon"
									// onClick={() => setModalShow(true)}
								></i>
							</Link>
						)}
						{/* <MyVerticallyCenteredModal
							movie={movie}
							show={modalShow}
							onHide={() => setModalShow(false)}
						/> */}
					</h3>
				</div>
			</div>
		</div>
	);
};
function MyVerticallyCenteredModal(props) {
	const movie = props.movie;
	console.log("inside ", movie);
	const [title, setTitle] = useState(movie.title);
	const [date, setDate] = useState(movie.date);
	const [start_time, setStart_time] = useState(movie.start_time);
	const [end_time, setEnd_time] = useState(movie.end_time);
	const [room, setRoom] = useState(movie.room);
	const [price, setPrice] = useState(movie.price);
	const [poster_url, setPoster_url] = useState(movie.poster_url);
	const [trailer_url, setTrailer_url] = useState(movie.trailer_url);
	const handleUpdate = (e) => {
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
			const movie = {
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

			console.log(movie);
			updateMovie(movie.id, movie)
				.then((res) => {
					console.log(res.message);
					// alert("Movie updated Successfully");
				})
				.catch((e) => console.log(e));
		}
	};

	return (
		<Modal
			{...props}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">Edit Movie</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<div className="editmovie">
					<div className="container">
						<div className="row">
							<div className="col-12">
								<form action="#" className="modalform" id="movieform">
									<div className="sign__logo">
										<img src="img/احجزلي.png" alt="" />
									</div>
									<div className="sign__group d-flex justify-content-around">
										<p className="title modaltitle">Title</p>
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
									<div className="sign__group d-flex justify-content-around">
										<p className="title modaltitle">Date</p>
										<input
											type="date"
											id="moviedate"
											className="sign__input upload"
											name="movieDate"
											value={date}
											onChange={(e) => setDate(e.target.value)}
										/>
									</div>
									<div className="sign__group d-flex justify-content-around">
										<p className="title modaltitle">Start Time</p>
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
									<div className="sign__group d-flex justify-content-around">
										<p className="title modaltitle">End Time</p>
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
									<div className="sign__group d-flex justify-content-around">
										<p className="title modaltitle">Screening Room</p>
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
									<div className="sign__group d-flex justify-content-around">
										<p className="title modaltitle"> Ticket Price</p>
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
									<div className="sign__group d-flex justify-content-around">
										<p className="title modaltitle"> Image Url</p>
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
									<div className="sign__group d-flex justify-content-around">
										<p className="title modaltitle"> Trailer Url</p>
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
								</form>
							</div>
						</div>
					</div>
				</div>
			</Modal.Body>
			<Modal.Footer>
				<Button
					type="button"
					name="editmovie"
					className="sign__btn modalbutton"
					onClick={(e) => {
						handleUpdate(e);
					}}
				>
					Edit Movie
				</Button>
				<Button onClick={props.onHide} className="sign__btn modalbutton">
					Close
				</Button>
			</Modal.Footer>
		</Modal>
	);
}
export default MovieItem;
