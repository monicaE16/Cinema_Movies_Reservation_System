import React, { useState } from "react";
import Cards from "react-credit-cards";
import Modal from "react-bootstrap/Modal";
import "react-credit-cards/es/styles-compiled.css";
import { buy } from "../API/mytickets";

const CreditCard = ({ reserved, id }) => {
	const [number, setNumber] = useState("");
	const [name, setName] = useState("");
	const [expiry, setExpiry] = useState("");
	const [cvc, setCvc] = useState("");
	const [focus, setFocus] = useState("");
	const [isOpen, setIsOpen] = useState(false);
	const [isOpen_error, setIsOpen_error] = useState(false);
	const handleClick = (e) => {
		console.log("you clicked on buy button");
		if (
			number.length === 0 ||
			name.length === 0 ||
			expiry.length === 0 ||
			cvc.length === 0
		) {
			setIsOpen_error(true);
		} else {
			//console.log("herre", reserved[0]);
			buy(id, reserved)
				.then((res) => console.log(res))
				.catch((e) => {
					console.log(e);
				});
			showModal();
		}
	};
	const showModal = () => {
		setIsOpen(true);
	};

	const hideModal = () => {
		setIsOpen(false);
	};

	const showModal_error = () => {
		setIsOpen_error(true);
	};

	const hideModal_error = () => {
		setIsOpen_error(false);
	};
	return (
		<div className="row">
			<Cards
				number={number}
				name={name}
				expiry={expiry}
				cvc={cvc}
				focused={focus}
				className="col-5 col-lg-12"
			/>
			<form id="PaymentForm" className="col-2 " action="">
				<input
					type="tel"
					name="number"
					placeholder="Card Number"
					value={number}
					onChange={(e) => setNumber(e.target.value)}
					onFocus={(e) => setFocus(e.target.name)}
					maxLength="16"
				/>

				<input
					type="text"
					name="name"
					placeholder="Name"
					value={name}
					onChange={(e) => setName(e.target.value)}
					onFocus={(e) => setFocus(e.target.name)}
				/>

				<input
					type="text"
					name="expiry"
					placeholder="MM/YY Expiry"
					maxLength="4"
					value={expiry}
					onChange={(e) => setExpiry(e.target.value)}
					onFocus={(e) => setFocus(e.target.name)}
				/>

				<input
					type="tel"
					name="cvc"
					placeholder="CVC"
					value={cvc}
					maxLength="3"
					onChange={(e) => setCvc(e.target.value)}
					onFocus={(e) => setFocus(e.target.name)}
				/>
				<button
					className="sign__btn"
					type="button"
					id="buy"
					onClick={(e) => {
						handleClick(e);
					}}
				>
					Buy
				</button>
			</form>
			<Modal show={isOpen_error} onHide={hideModal_error}>
				<Modal.Body style={{ color: "white" }}>
					Please Enter Valid Inputs
				</Modal.Body>
				<Modal.Footer>
					<button onClick={hideModal_error} style={{ color: "white" }}>
						ok
					</button>
				</Modal.Footer>
			</Modal>
			<Modal show={isOpen} onHide={hideModal}>
				<Modal.Body style={{ color: "white" }}>Payment Succeeded</Modal.Body>
				<Modal.Footer>
					<button onClick={hideModal} style={{ color: "white" }}>
						ok
					</button>
				</Modal.Footer>
			</Modal>
		</div>
	);
};

export default CreditCard;
