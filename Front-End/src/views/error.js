import React from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
	let navigate = useNavigate();
	return (
		<div className="body">
			<div className="page-404 section">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="page-404__wrap">
								<div className="page-404__content">
									<h1 className="page-404__title">404</h1>
									<p className="page-404__text">
										The page you are looking for is not available!
									</p>
									<button
										className="page-404__btn"
										onClick={() => navigate("/Home")}
									>
										go back
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Error;
