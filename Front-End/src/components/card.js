import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
const CardReservation = () => {
	return (
		<div className="Reservation-Card">
			<Card>
				<Card.Body>
					<Card.Title style={{ textAlign: "left", color: "#fec260" }}>
						Movie Title
					</Card.Title>

					<Card.Text style={{ textAlign: "left", color: "white" }}>
						Date:
					</Card.Text>
					<Card.Text style={{ textAlign: "left", color: "white" }}>
						Start:
					</Card.Text>
					<Card.Text style={{ textAlign: "left", color: "white" }}>
						End:
					</Card.Text>
					<Card.Text style={{ textAlign: "left", color: "white" }}>
						Seat No.:
					</Card.Text>
					<button className="sign__btn" type="button" id="cancel">
						cancel
					</button>
				</Card.Body>
			</Card>
		</div>
	);
};

export default CardReservation;
