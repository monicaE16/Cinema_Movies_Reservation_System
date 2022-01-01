import axios from "axios";
import { baseURL } from "../constants/constants";

export const getTickets = () => {
	return axios
		.get(baseURL + "/users/mytickets", {
			headers: {
				Authorization: `Bearer ${window.localStorage.getItem("token")}`,
			},
		})

		.then((res) => {
			return Promise.resolve(res.data);
		})
		.catch((e) => {
			console.clear();
			return Promise.resolve(e);
		});
};

export const cancel = (movie_id, seat_no) => {
	console.log("in axios", movie_id, seat_no);
	return axios
		.post(
			baseURL + "/tickets/cancel",
			{ movie: movie_id, seat: seat_no },

			{
				headers: {
					Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJzYXJhIiwiaWF0IjoxNjQxMDcxNjk5LCJleHAiOjE2NDE2NzY0OTl9.OFL4lgtEpgWzoteynMcUm8ngS6jz2-uL-ENDROdRJ2w`,
				},
			}
		)

		.then((res) => {
			console.log(res.status);
			return Promise.resolve(res.data);
		})
		.catch((e) => {
			return Promise.resolve(e);
		});
};
