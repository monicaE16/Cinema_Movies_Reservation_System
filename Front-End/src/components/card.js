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
						Movie: <span>{details.title}</span>
					</Card.Title>

					<Card.Text style={{ textAlign: "left", color: "white" }}>
						Date: <span>{details.date}</span>
					</Card.Text>
					<Card.Text style={{ textAlign: "left", color: "white" }}>
						Start: <span>{details.start_time}</span>
					</Card.Text>
					<Card.Text style={{ textAlign: "left", color: "white" }}>
						End: <span>{details.end_time}</span>
					</Card.Text>
					<Card.Text style={{ textAlign: "left", color: "white" }}>
						Seat Number: <span>{details.seat_number}</span>
					</Card.Text>
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
