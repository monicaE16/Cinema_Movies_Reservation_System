import React, { useEffect, useState } from "react";
import CardReservation from "../components/card";
import Header from "../components/header";
import { getTickets } from "../API/mytickets";
const Reservation = () => {
	const [resv, setResv] = useState([]);
	useEffect(() => {
		getTickets()
			.then((res) => {
				console.log(res);
				setResv(res);
			})
			.catch((e) => console.log(e));
	}, []);
	return (
		<div>
			<Header />
			<section className="home">
				{resv.map((reservation) => {
					return (
						<CardReservation
							key={reservation.seat_number}
							details={reservation}
						/>
					);
				})}
			</section>
		</div>
	);
};

export default Reservation;
