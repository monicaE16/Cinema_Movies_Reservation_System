import axios from "axios";
import { User } from "../models/user";
import { baseURL } from "../constants/constants";

/**
 * Login function
 * @param {string} username
 * @param {string} password
 * @returns if the username and password are correct it will return the authenticated user parced into a user Object
 */
export const login = (username, password) => {
	console.log(username, password);

	const user = {
		username,
		password,
	};

	// The post request : Sending the username and password to the url and if the
	// request was successful it will return a user object else it will return undefined
	return axios
		.post(baseURL + "/users/authenticate", user)
		.then((res) => {
			const user = new User();
			window.localStorage.setItem("token", res.data.token);
			window.localStorage.setItem("role", res.data.role);
			user.getUser(res.data, username);

			return Promise.resolve(user);
		})
		.catch((e) => {
			console.clear();
			return Promise.resolve(undefined);
		});
};

export const register = (username,firstName,lastName,email,password,role) => {
	console.log(username,firstName,lastName,email,password,role);

	const user = {
		username,
		firstName,
		lastName,
		email,
		password,
		role
	};

	// The post request : Sending the username and password to the url and if the
	// request was successful it will return a user object else it will return undefined
	return axios
		.post(baseURL + "/users/register", user)
		.then((res) => {
			const user = new User();
			window.localStorage.setItem("token", res.data.token);
			window.localStorage.setItem("role", res.data.role);
			user.getUser(res.data, username);

			return Promise.resolve(user);
		})
		.catch((e) => {
			console.clear();
			return Promise.resolve(undefined);
		});
};
