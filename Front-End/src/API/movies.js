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
	console.log("in axios", movie);
	return axios
		.post(
			baseURL + `/movies/update/${id}`,
			{
				title: "momomomo1777",
				date: "06/05/2022",
				start_time: "20:00:00",
				end_time: "22:00:00",
				room: "A21",
				empty_seats_count: 30,
				price: 60,
				poster_url:
					"https://m.media-amazon.com/images/M/MV5BMzFkM2YwOTQtYzk2Mi00N2VlLWE3NTItN2YwNDg1YmY0ZDNmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
				trailer_url: "https://www.youtube.com/watch?v=jEDaVHmw7r4",
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
