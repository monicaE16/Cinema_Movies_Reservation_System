import React, { useState } from "react";
import "./room.css";

const Room = () => {
	//data should be taken from api
	const [seats, setSeats] = useState([
		"1",
		"2",
		"3",
		"4",
		"5",
		"6",
		"7",
		"8",
		"9",
		"10",
		"11",
		"12",
		"13",
		"14",
		"15",
		"16",
		"17",
		"18",
		"19",
		"20",
	]);

	//colour => purple
	const [seatsAvailable, setSeatsAvailable] = useState([
		"4",
		"5",
		"6",
		"7",
		"8",
		"9",
		"10",
		"11",
		"12",
		"13",
		"14",
		"15",
		"16",
		"17",
		"18",
		"19",
		"20",
	]);

	//color => pink
	const [seatsReserved, setSeatsReserved] = useState([]); // means selected seats but not reserved yet

	const handleClick = (seat) => {
		if (
			seatsAvailable.indexOf(seat) === -1 &&
			seatsReserved.indexOf(seat) === -1
		) {
			return;
		}

		//if a seat is available and I want to reserve it
		// put in reserved queue and remove it from available queue
		else if (seatsAvailable.indexOf(seat) > -1) {
			setSeatsReserved(seatsReserved.concat(seat));
			setSeatsAvailable(seatsAvailable.filter((res) => res != seat));
		}
		//if I reserved a seat and wanted to undo it
		//then I will remove it from reserved seats and return it to available seats
		else if (seatsReserved.indexOf(seat) > -1) {
			setSeatsAvailable(seatsAvailable.concat(seat));
			setSeatsReserved(seatsReserved.filter((res) => res != seat));
		}
	};

	return (
		<div className="body">
			<Seating
				seats={seats}
				available={seatsAvailable}
				reserved={seatsReserved}
				onClickData={handleClick}
			/>
		</div>
	);
};

const Seating = (props) => {
	const { seats, available, reserved, onClickData } = props;
	const onClickSeat = (seat) => {
		onClickData(seat);
	};
	return (
		<div className="body">
			<h1>احجز تذكرتك الان</h1>
			<ul className="showcase">
				<li>
					<div className="seat"></div>
					<small>Available</small>
				</li>
				<li>
					<div className="seat selected"></div>
					<small>Selected</small>
				</li>
				<li>
					<div className="seat occupied"></div>
					<small>Occupied</small>
				</li>
			</ul>
			<div className="container-room2">
				<div className="screen"></div>

				<table className="grid">
					<tbody>
						<tr className="row">
							{seats.map((row) => (
								<td
									className={
										reserved.indexOf(row) > -1
											? "seat selected"
											: available.indexOf(row) === -1
											? "seat occupied"
											: "seat"
									}
									key={row}
									onClick={(e) => onClickSeat(row)}
								></td>
							))}
						</tr>
					</tbody>
				</table>
			</div>
			{reserved.length === 0 || (
				<p className="text">
					انت اخترت <span id="count">{reserved.length}</span> اماكن السعر{" "}
					<span id="total">{reserved.length * 50}</span> جنيها
				</p>
			)}

			{reserved.length === 0 || (
				<button className="sign__btn" id="reserve" type="button">
					احجزلي
				</button>
			)}
		</div>
	);
};

export default Room;
