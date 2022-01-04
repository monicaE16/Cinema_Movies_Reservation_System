import React from "react";
import { useLocation } from "react-router-dom";

import CreditCard from "../components/credit_card";
import Header from "../components/header";

const Payment = () => {
	const { state } = useLocation();
	const { reserved, id } = state;

	console.log("in payment", reserved, id);
	return (
		<div>
			<Header />
			<section className="home">
				<div className="container">
					<CreditCard reserved={reserved} id={id} />
				</div>
			</section>
		</div>
	);
};

export default Payment;
