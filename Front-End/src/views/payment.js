import React from "react";
import { useLocation } from "react-router-dom";

import CreditCard from "../components/credit_card";
import Header from "../components/header";

const Payment = () => {
	const { state } = useLocation();
	const { reserved } = state;

	console.log(reserved);
	return (
		<div>
			<Header />
			<section className="home">
				<div className="container">
					<CreditCard />
				</div>
			</section>
		</div>
	);
};

export default Payment;
