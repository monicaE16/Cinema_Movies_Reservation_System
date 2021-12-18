import React, { useState } from "react";
import "./room2.css";

const Room2 = () => {
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

	const [seatsAvailable, setSeatsAvailable] = useState([
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

	const [seatsReserved, setSeatsReserved] = useState([]);

	const handleClick = (seat) => {
		if (seatsReserved.indexOf(seat) > -1) {
			setSeatsAvailable(seats.concat(seat));
			setSeatsReserved(seatsReserved.filter((res) => res != seat));
		} else {
			setSeatsReserved(seatsReserved.concat(seat));
			setSeatsAvailable(seatsAvailable.filter((res) => res != seat));
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
	console.log(seats, "reserved", reserved);
	const onClickSeat = (seat) => {
		onClickData(seat);
	};
	return (
		<div>
			<div className="container-room2">
				<table className="grid">
					<tbody>
						<tr className="row">
							{seats.map((row) => (
								<td
									className="seat"
									className={
										reserved.indexOf(row) > -1 ? "seat occupied" : "seat"
									}
									key={row}
									onClick={(e) => onClickSeat(row)}
								></td>
							))}
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Room2;
