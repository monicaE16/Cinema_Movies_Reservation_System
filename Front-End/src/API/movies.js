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

export const createMovie = (movie) => {
	console.log("in axios", movie);
	return axios
		.post(
			baseURL + "/movies/new",
			{
				title: movie.title,

				date: movie.date,
				start_time: movie.start_time,
				end_time: movie.end_time,
				room: movie.room,

				empty_seats_count: movie.empty_seats_count,
				price: movie.price,

				poster_url: movie.poster_url,
				trailer_url: movie.trailer_url,
			},

			{
				headers: {
					Authorization: `Bearer ${window.localStorage.getItem("token")}`,
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

export const updateMovie = (id, movie) => {
	console.log("in axios", id);
	const m = {
		title: movie.title,

		date: movie.date,
		start_time: movie.start_time,
		end_time: movie.end_time,
		room: movie.room,

		price: movie.price,

		poster_url: movie.poster_url,
		trailer_url: movie.trailer_url,
	};
	console.log("movie object", m);
	return axios
		.post(
			baseURL + `/movies/update/${id}`,

			m,
			{
				headers: {
					Authorization: `Bearer ${window.localStorage.getItem("token")}`,
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
