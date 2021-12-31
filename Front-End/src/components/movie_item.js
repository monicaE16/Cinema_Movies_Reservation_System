import React from "react";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

const MovieItem = ({ title, cover }) => {
	const [modalShow, setModalShow] = React.useState(false);

	return (
		<div className="item">
			<div className="card card--big">
				<Link to={"/movie"} state={{ title, cover }}>
					<div className="card__cover">
						<img src={cover} alt="" height="100%" width="100%" />
					</div>
				</Link>
				<div className="card__content">
					<h3 className="card__title">
						<Link to={"/movie"} state={{ title, cover }}>
							<h3>{title}</h3>
						</Link>

						<i
							className="fa fa-pen edit-icon"
							onClick={() => setModalShow(true)}
						></i>
						<MyVerticallyCenteredModal
							show={modalShow}
							onHide={() => setModalShow(false)}
						/>
					</h3>
				</div>
			</div>
		</div>
	);
};
function MyVerticallyCenteredModal(props) {
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
										/>
									</div>
									<div className="sign__group d-flex justify-content-around">
										<p className="title modaltitle">Date</p>
										<input
											type="date"
											id="moviedate"
											className="sign__input upload"
											name="movieDate"
										/>
									</div>
									<div className="sign__group d-flex justify-content-around">
										<p className="title modaltitle">Start Time</p>
										<input
											type="time"
											className="sign__input upload"
											id="movie_start_time"
											name="appt"
										/>
									</div>
									<div className="sign__group d-flex justify-content-around">
										<p className="title modaltitle">End Time</p>
										<input
											type="time"
											className="sign__input upload"
											id="movie_end_time"
											name="appt"
										/>
									</div>
									<div className="sign__group d-flex justify-content-around">
										<p className="title modaltitle">Screening Room</p>
										<select
											className="sign__input upload"
											name="rooms"
											id="screenroom"
										>
											<option style={{ color: "#000" }} value="room1">
												A
											</option>
											<option style={{ color: "#000" }} value="room2">
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
										/>
									</div>
									<div className="sign__group d-flex justify-content-around">
										<p className="title modaltitle"> Image Url</p>
										<input
											type="text"
											id="imgUrl"
											className="sign__input upload"
											name="imageUrl"
										/>
									</div>
									<div className="sign__group d-flex justify-content-around">
										<p className="title modaltitle"> Trailer Url</p>
										<input
											type="text"
											id="trailerurl"
											className="sign__input upload"
											name="trailerUrl"
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
