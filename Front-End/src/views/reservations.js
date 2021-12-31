import React from "react";
import CardReservation from "../components/card";
import Header from "../components/header";
const Reservation = () => {
	return (
		<div>
			<Header />
			<section className="home">
				<CardReservation />
				<CardReservation />
				<CardReservation />
				<CardReservation />
				<CardReservation />
			</section>
		</div>
	);
};

export default Reservation;
