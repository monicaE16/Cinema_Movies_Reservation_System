import React, { useState } from "react";
import "./room1.css";

const Room1 = () => {
	const [seats, setSeats] = useState([
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
	]);

	return (
		<div className="body">
			<ul className="showcase">
				<li>
					<div className="seat"></div>
					<small>N/A</small>
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

			<div className="container-room">
				<div className="screen"></div>

				<div className="row">
					<div className="seat occupied"></div>
					<div className="seat"></div>
					<div className="seat"></div>
					<div className="seat"></div>
				</div>
				<div className="row">
					<div className="seat"></div>
					<div className="seat"></div>
					<div className="seat"></div>
					<div className="seat"></div>
				</div>
				<div className="row">
					<div className="seat"></div>
					<div className="seat"></div>
					<div className="seat"></div>
					<div className="seat"></div>
				</div>
				<div className="row">
					<div className="seat"></div>
					<div className="seat"></div>
					<div className="seat"></div>
					<div className="seat"></div>
				</div>
				<div className="row">
					<div className="seat"></div>
					<div className="seat"></div>
					<div className="seat"></div>
					<div className="seat"></div>
				</div>
			</div>

			<p className="text">
				You have selected <span id="count">0</span> seats for a price of $
				<span id="total">0</span>
			</p>
		</div>
	);
};

export default Room1;
