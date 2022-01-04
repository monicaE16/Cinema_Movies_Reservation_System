import React from "react";
import Card from "react-bootstrap/Card";
import { cancel } from "../API/mytickets";
const CardReservation = ({ details }) => {
	const handleClick = () => {
		cancel(details.movie_id, details.seat_number)
			.then((res) => {
				console.log(res);
				console.log(window.localStorage.getItem("token"));

				alert("seats canceled successfuly");
			})
			.catch((e) => console.log(e));
	};
	return (
		<div className="Reservation-Card">
			<Card>
				<Card.Body>
					<Card.Title style={{ textAlign: "left", color: "#fec260" }}>
					<i className="fas fa-film" style={{marginRight:'10px'}}></i>
						Movie: <span>{details.title}</span>
					</Card.Title>

					<Card.Text style={{ textAlign: "left", color: "white" }}>
					<i className="fas fa-calendar-week detail" style={{fontSize:20}}></i>
					<span className="detail">
						Date:</span> <span>{details.date}</span>
					</Card.Text>
					<Card.Text style={{ textAlign: "left", color: "white" }}>
					<i className="fas fa-clock detail"></i>
					<span className="detail">
						Start:</span> <span>{details.start_time}</span>
					</Card.Text>
					<Card.Text style={{ textAlign: "left", color: "white" }}>
					<i className="fas fa-clock detail"></i>
					<span className="detail">
						End:</span> <span>{details.end_time}</span>
					</Card.Text>
					<Card.Text style={{ textAlign: "left", color: "white" }}>
					<span className="detail"><img src="../icon/cinema-seat.png" /></span>
					<span className="detail">
						Seat Number:</span> <span>{details.seat_number}</span>
					</Card.Text>
					<div className="reservationImg">
				<img src={details.poster_url} />
                    </div>
					<button
						className="sign__btn"
						type="button"
						id="cancel"
						onClick={() => {
							handleClick();
						}}
					>
						cancel
					</button>
				</Card.Body>
			</Card>
		</div>
	);
};

export default CardReservation;
