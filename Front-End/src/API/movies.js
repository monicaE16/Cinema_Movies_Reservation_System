import axios from "axios";
import { baseURL } from "../constants/constants";

export const getMovies = () => {
	return axios
		.get(baseURL + "/movies/getallmovies")
		.then((res) => {
			return Promise.resolve(res.data);
		})
		.catch((e) => {
			console.clear();
			return Promise.resolve(e);
		});
};

export const getReserved = (id) => {
	return axios
		.get(baseURL + `/movies/tickets/${id}`)
		.then((res) => {
			return Promise.resolve(res.data);
		})
		.catch((e) => {
			console.clear();
			return Promise.resolve(e);
		});
};
